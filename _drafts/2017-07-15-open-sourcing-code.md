---
layout: post
title:  "Open sourcing code"
date:   2017-07-15 19:28:01 -0500
---
I was enthralled recently with a discussion on Reddit's machinelearning subreddit. Users were arguing about the often less-than-ideal quality of machine learning code out there, and how interpreting what's going on without comments or semantically named variables was near impossible. 
There were generally two schools of thought here. 

The first was agreeing that machine learning (and commonly deep learning) frameworks, toolboxes, snippets or examples were often ill-commented, or were so complex that they required doctorates and many years of experience to understand. Variables were often named poorly (think less than 3 characters), with there being very little standardisation and consistency across repos. Users put this down to perhaps laziness, perhaps elitism, or perhaps just a lack of care for making the code accessible to others. 

The second school of thought was that the repos almost always started off as research code. This meant that it changed rapidly, was perhaps inefficient or repetitive, and didn't have much in the way of comments. The code was often just a stream-of-consciousness, with variables and functions being torn up and down in a high paced environment. Researchers have a means to an end, they probably didn't start out looking to create a fully featured framework with fantastic user experience, but instead were using the code to generate their results, and you know, do research. This meant that they often didn't have time to clean up the code, overhaul the efficiency or comment every line, resulting in the mess described above. But should this mean they shouldn't publish it and make it open source? Absolutely not.

While I understand the merits of the first argument, I have to agree that having access to any code is better than no code. Even if the repository isnt super friendly to use. A lot of users in the Reddit thread were pointing out that there is often not much accountability in research, in that work can be published without accompanying code being peer-reviewed or open-sourced. Part of this might stem from the fact that the research code isn't perfect, and there may be a fear amongst researchers that people that fall in that first school of thought will unfairly criticise them for writing bad code. This is unfortunate, and something that should probably be taught to young researchers. While the old addage for writing papers is to Publish Publish Publish, so too should be said of source code. Getting it out there is far more important than holding off until you have time to write a full documentation suite with fully standards-compliant docstrings. Lets face it, that might take years (I mean, who likes writing documentation?!).

In the spirit of the argument, I've decided to follow suit and start making my own code open source as soon as I can. It may not be perfect, and it may lack some comments, but if it contributes to a published piece of my research, and it works - or even if it doesnt - I plan to publish it to GitHub for the world to see.

Just don't look at it; it's embarassing.