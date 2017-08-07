---
layout: post
title:  "From WordPress.com to Jekyll (with Docker)"
date:   2017-07-15 19:28:01 +1000
tagline: 'Breaking free of the WP chains with Jekyll and a Dockerized development environment.'
categories: [web, project-management, docker, software-dev, phd]
---
I initially started this blog on [WordPress](https://wordpress.com/) (the official hosted one -- not a self-hosted instance). I had a need for a personal website very quickly for a scholarship application, and as a site on WordPress is incredibly quick and easy to set up, that was my go-to. 

I can't say that I loved my experience using it. I've had a pretty reasonable amount of exposure to web development, and in fact it's something that I thoroughly enjoy. I think it caters to my as yet unfilfilled childhood aspirations of being an architect or designer. I've worked on several webdev projects in the last few years, which meant that relinquishing absolute control to WordPress was something that often infuriated me. 

I had previously come across [Jekyll](https://jekyllrb.com/) but it was never something that I had put the time or effort into researching. After seeing [Andrej Karpathy's blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/) about his own experiences with a similar migration, I decided to give it a go myself. Coincidentally, it was Andrej's blog who inspired me to start my own blog in the first place! 

I'm trying my best to manage my PhD progress better, and this blog is part of that effort. Therefore migrating away from WordPress to Jekyll sounded like a fun project that -- while a distraction -- was still <i>somewhat</i> related to my PhD. Plus, it also meant that I could host my website through my GitHub repo directly for free, saving me from spending any more of my precious student dollars on a WordPress subscription.<sup>Yes, I know there are free models available.</sup>

Jekyll was a breeze to set up, however I suspect it was far easier as I containerized it with Docker. I predominantly run Windows, and I'm a huge fan of working in isolated environments for all my various projects to avoid causing conflicts or clutter on my host. Choosing to run my Jekyll dev environment in a Docker container meant that all dependencies were isolated, while still granting me full access to the source files on my host through a handy volume. Luckily, there is an official jekyll image available to allow me to do this with very little effort, as it meant all dependencies were already taken care of.

## Starting a Jekyll project with Docker
After creating a directory on my host with a quick `mkdir /folder/on/host`, I was able to launch a container from the image to create a new Jekyll blog in one fell swoop:

```
docker run --rm -v /folder/on/host:/srv/jekyll/research-blog jekyll/jekyll jekyll new research-blog
```

This command uses the official [`jekyll/jekyll` image](https://hub.docker.com/r/jekyll/jekyll/), maps a volume on my local host `/folder/on/host` to `/srv/jekyll/research-blog` inside the container, and calls `jekyll new research-blog` to create a new Jekyll project aptly named `research-blog`. 

This meant that my `/folder/on/host` would now contain the starter Jekyll files, and I could initialise a git repo and start editing the files however I saw fit. 

To preview the files in dev, I could run another container, with a slight modification to the volume:

```
docker run --rm -p 4000:4000 -v /folder/on/host:/srv/jekyll jekyll/jekyll jekyll serve
```

This places all my files in the `/srv/jekyll` directory in the container, bypassing the subdirectory that was created when I initialised the project.

Now I can edit my blog files on my host leave this container running indefinitely to view live previews to any changes I make to my blog files on my Windows host. I could even add an alias to run the above command to make it easier in the inevitable event that I need to stop the container (a forced Windows 10 update and restart, maybe?).

And voila, I'm up and running with a Jekyll dev environment, and I can push the files to GitHub and set up GitHub pages. 

But there's one small problem, which is that when the container is run, it will detect that the image is missing some gems, and will therefore download and install them. This is less than ideal, as we don't really want to continuously re-download the gems necessary. To resolve this, we can extend the jekyll/jekyll image.

## Extending the Jekyll image
We want to create a new image that adds additional layers to the `jekyll/jekyll` image. This new image will already have the necessary gems installed so that we can run a container from it without downloading them each time.

As I will be hosting my website on GitHub pages, I've modified the auto-generated Gemfile to include the github-pages gem. This should keep my container's versions the same as GitHub Pages to help make sure that what I see on my local machine is the same as what GitHub Pages will render for the rest of the world to see.

To extend the Jekyll image, we need to create a new Dockerfile with the following:

```
FROM jekyll/jekyll

WORKDIR /srv/jekyll

COPY ./Gemfile /srv/jekyll/Gemfile

RUN apk update
RUN apk upgrade
RUN gem install bundler --no-ri --no-rdoc
RUN bundle update
RUN gem clean

CMD ["jekyll", "--help"]
```
This will take the `jekyll/jekyll` image, copy in the modified Gemfile, update and upgrade the alpine Linux packages, install bundler, update packages, and then clean up. This means that dependencies specified in the Gemfile will be installed in the image, so that any future containers that run it will not need to download them again.

Creating the image from the Dockerfile is as simple as launching a terminal at the working directory and running:

```
docker build -t my-image-name .
```

Our final step is to modify our docker command to use this image instead of the `jekyll/jekyll` one. This is a simple substitution of `jekyll/jekyll` with `my-image-name`:

```
docker run --rm -p 4000:4000 -v /folder/on/host:/srv/jekyll my-image-name jekyll serve
```

The Gemfile and Dockerfile that I used can be found in [this repo](https://github.com/chikean/jekyll-bootstrap4).

## Bonus: Adding a PowerShell alias
Constantly typing that long docker command to launch a container to run my Jekyll development environment can be exhausting. Remembering the flags and the right folders might pose a challenge in the future, so we can create an alias to speed things up. As my host runs Windows, we can do this in PowerShell:

```
echo "function function1 {docker run --rm -p 4000:4000 -v /folder/on/host:/srv/jekyll jekyll/jekyll jekyll serve}" >> $profile
echo "Set-Alias serve-blog function1" >> $profile
```

These two commands append first a function with the docker command, with the name `function1`, and second an alias `serve-blog` which is an alias for the function. As such, when I want to run a container of my Jekyll development environment, I simply need to enter `serve-blog` in a PowerShell console and my files within `/folder/on/host` will be up and running at `localhost:4000`. Note that it may require a restart of PowerShell to apply. 

Happy blogging!