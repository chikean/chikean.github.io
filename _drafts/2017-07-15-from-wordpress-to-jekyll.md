---
layout: post
title:  "From WordPress.com to Jekyll"
date:   2017-07-15 19:28:01 -0500
---
I initially started this blog on WordPress.com. I had a need for a personal website very quickly, and due to WordPress.com bbeing incredibly quick and easy to set up, that was my go-to. I had heard about Jekyll a few times, but  due to my busy schedule it was something that I had never fully looked into. After seeing Andrej Karpathy's blog post about his own experiences migrating from WordPress.com to Jekyll, and now being serious about using a blog as a tool for my PhD, I decided to give it a go myself. 

I have had a lot of exposure to web development - in fact it is something that I thoroughly enjoy as it caters to my unfulfilled childhood dreams of being an architect/designer. I've worked on full-stack web development projects in industry, for my own research, have consulted on projects at ANU, and have even served as a tutor for a few years in first-year web design and development. This meant that setting up this blog on Jekyll was a fun weekend project for me. Not only would it be a beneficial learning experience, it also meant that I could host my website through my GitHub repo directly for free, saving me from spending another 48 of my precious student dollars on a WordPress.com Personal subscription.

I found the process of setting it up to be incredibly quick and easy. My main machines run Windows, and I'm a huge fan of working in isolated environments for my various different projects to avoid cluttering my host or creating conflicts. Due to this I chose to set up a Jekyll dev environment in a Docker container, with a handy volume allowing me to access the raw code on my host. Luckily, there is an official jekyll image available to allow me to do this with very little effort.

After creating a directory on my host, I was able to launch a container from the image to create a new Jekyll blog.

// docker run --rm -v C:/Users/chris/Documents/GitHub/research-blog:/srv/jekyll/research-blog jekyll/jekyll jekyll new research-blog

This created the necessary starter files on my Windows host. I can then use the built-in Jekyll development server inside my container to preview what my site looks like:

// docker run --rm -p 4000:4000 -v C:/Users/chris/Documents/GitHub/research-blog:/srv/jekyll jekyll/jekyll jekyll serve

Note that the volume map in the above is slightly different, as it instead places all my files in the /srv/jekyll directory in the container. 

Now I can leave this container running indefinitely to view live previews to any changes I make to my blog files on my Windows host, but of course it is inevitable that I will need to close the PowerShell terminal and stop the container. To make it easier to run this again in the future without having to remember the volume and type it out, I can add an alias for it in my PowerShell profile.

From a command line: 

// echo function f1 {docker run --rm -p 4000:4000 -v C:/Users/chris/Documents/GitHub/research-blog:/srv/jekyll jekyll/jekyll jekyll serve} >> $profile
// echo Set-Alias blog-serve D1 >> $profile

Now I can restart my powershell window and type blog-serve to automatically run the container's development server. Simple!

This was my first foray into Ruby. I've predominantly dealt with PHP or - preferably - Python in my previous web dev projects, however I had been meaning to expand my repotoir into Ruby and JS-based frameworks. 