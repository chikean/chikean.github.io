---
layout: post
title:  "Managing Conda Environments Across Devices"
date:   2017-01-30 16:21:00 +1000
tagline: 'Keeping my conda environments consistent and accessible.'
categories: [software-dev, python, data-science]
---
One of the downsides of taking on lots of projects is that I'm always working across different devices and locations. It means that my work can often be fragmented; I start writing some code on one device, and need to pick it up on another. I'm usually writing snippets of Python in Jupyter notebooks, and depending on the project, means I need to keep track of different Python environments with any number of package dependencies. 

Fortunately, Anaconda is my weapon-of-choice when it comes to managing Python environments, which as it turns out makes keeping my distributed Python environments consistent and accessible relatively easy. When I first started using Anaconda (well, Miniconda), I was manually creating environments on each of my devices. My workflow usually consisted of running my code until I got a dependency error, which triggered a memory of a package I needed, which I then installed on the spot. I would rinse and repeat this, until it became too tedious and I looked for a better way.

`pip` makes it easy to export a list of packages with `pip freeze > requirements.txt`, so I wondered if `conda` offered a similar solution. Of course it does, and of course it is documented in the [Anaconda docs](https://conda.io/docs/using/envs.html#share-an-environment). 

Once I set up an environment on one machine, all I need to do is activate the enviroment, and export is using:

```
conda env export > environment.yml
```

As I have multiple environments, I can run through each of them and export them to a `.yml` file corresponding to their name. Keeping these environment files in a centralised and accessible place is extremely easy with one of the widely available cloud storage options. And so that means that on my other devices, I can replicate the environment using:

```
conda env create -f environment.yml
```

If I want to then update any packages, I can do so on one machine (using `conda update --all` within the activated environment, for example), and then re-export the `.yml` file to my cloud storage. Unfortunately there's no way that I know of to make all of my other devices update their environments when this file changes without setting up a custom cron job, meaning that I still need to remember to update the other environments using the file:

```
conda env update -f environment.yml --force
```

Now my work suffers one less barrier. And to think -- all I had to do was read the documentation!