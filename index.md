---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<div class="card text-center">
  <img class="card-img img-fluid front-img" src="{{ "/assets/img/cover.jpg" | relative_url }}" alt="Card image">
  <div class="card-img-overlay">
    <h1 class="card-title front-title">{{ site.title | escape }}</h1>
    <h2 class="display-4 front-subtitle">{{ site.subtitle | escape }}</h2>
    <p class="card-text lead front-tagline">{{ site.description | escape }}</p>
  </div>
</div>
<!-- <img src="" class="img-fluid mx-auto border-4" alt="Responsive image"> -->
<div class="row marketing">
    <div class="col">
        <span class="text-center"><h4 class="text-primary">Recent News</h4></span>
        <ul class="list-group my-4 front-list">
            {% for post in site.news reversed limit:3 %}
            {% assign date_format = site.minima.date_format | default: "%-d %b %Y" %}
            <li class="list-group-item"><small class="text-muted mr-2">{{ post.date | date: date_format }}</small>{{ post.title | escape }}</li>
            {% endfor %}
        </ul>
    </div>
    <div class="col">
        <span class="text-center"><h4 class="text-primary">Latest Blog Posts</h4></span>
        <div class="list-group my-4 front-list">
            {% for post in site.posts limit:3 %}
            {% assign date_format = site.minima.date_format | default: "%-d %b %Y" %}
            <a class="list-group-item list-group-item-action" href="{{ post.url | relative_url }}"><small class="text-muted mr-2">{{ post.date | date: date_format }}</small>{{ post.title | escape }}</a>
            {% endfor %}
        </div>
    </div>
</div>