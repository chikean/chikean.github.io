---
layout: page
title: Portfolio
permalink: /portfolio/
---
<div class="row no-gutters">
    {% for item in site.portfolio %}
    {% if item.img %}
    {% assign image = "/assets/img/" | append: item.img %}
    {% else %}
    {% assign image = "http://via.placeholder.com/2100x1500" %}
    {% endif %}
    <a class="col-md-4 col-sm-6 project-cover" href="{{ item.url }}">
    <div class='dark-wrap'></div>
        <img class="img-fluid" src="{{ image }}" alt="{{ item.title }}">
            <div class="caption p-2 text-center">
                <h4 class="text-uppercase font-weight-bold text-light p-2">{{ item.title }}</h4>
            </div>
    </a>
    {% endfor %}
</div>