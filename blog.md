---
layout: default
title: Blog
permalink: /blog
---
<main role="main">
  <div class="container mt-5">
    {% for post in site.posts limit:1 %}
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %} 
    <div class="card my-4 mx-auto">
      <h3 class="card-header">Latest</h3>
      <div class="card-body">
        <section class="jumbotron text-center blog-jumbotron">
          <div class="container">
            <h1 class="jumbotron-heading blog-heading">{{ post.title | escape }}</h1>
            <p class="lead text-muted">{{ post.tagline | escape }}</p>
            <p><a href="{{ post.url | relative_url }}" class="btn btn-primary">View Post</a></p>
            <p class="card-text"><small class="text-muted">Posted {{ post.date | date: date_format }}</small></p>
          </div>
        </section>
      </div>
    </div>
      {% endfor %}
      {% assign limit = site.posts | size | minus:1 %}
      {% if limit > 0 %}
      <div class="row">
            {% for i in (1..limit) %}
            {% assign post = site.posts[i] %}
            <div class="col-md-6 col-lg-4s pb-3">
              <div class="card border-dark">
                  <div class="card-body"> 
                      <h4 class="card-title">{{ post.title | escape }}</h4>
                      <p class="card-text">{{ post.tagline | escape }}</p>
                  </div>
                  <div class="card-footer">
                      <p class="card-text"><small class="text-muted">Posted {{ post.date | date: date_format }}</small>
                      <a href="{{ post.url | relative_url }}" class="btn btn-secondary float-right">View Post</a></p>
                  </div>
                </div>
            </div>
            {% endfor %} 
        </div>
    </div>
      {% endif %}
</main>