---
layout: default
title: CV
permalink: /cv
---
<div class="container-fluid">
      <div class="row">
          <nav class="col-sm-4 col-md-3 d-none d-sm-block sidebar bg-primary" id="sidebar">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#home"><span class="sr-only">(current)</span>
                <span class="d-none d-lg-block">
          <div class="w-100">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="{{ '/assets/img/chris-avatar.svg' | relative_url }} " alt="">
          </div>
        </span></a>
              </li>
              {% assign sorted = site.resume | sort: 'order' %}
              {% for item in sorted %}
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#{{ item.title | escape | downcase }}">{{ item.title | escape }}</a>
              </li>
            {% endfor %}
            </ul>
          </nav>
        <main class="col-sm-8 offset-sm-4 col-md-9 offset-md-3">
          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="home">
            <div class="my-auto">
              <h1 class="display-2 text-uppercase">{{ site.title }}</h1>
              <p class="lead">{{ site.description }}</p>
              <ul class="mt-5 list-inline">
                <li class="list-inline-item mr-3">
                  <a href="https://github.com/{{ site.github_username }}"><i class="fab fa-github fa-3x"></i></a>
                </li>
                <li class="list-inline-item mr-3">
                  <a href="https://linked.in/in/{{ site.linkedin_username }}"><i class="fab fa-linkedin fa-3x"></i></a>
                </li>
              </ul>
            </div>
          </section>
          {% for item in sorted %}
          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="{{ item.title | escape | downcase }}">
            <div class="my-auto">
              <h1 class="display-4 text-uppercase">{{ item.title | escape }}</h1>
              {{ item.content }}
            </div>
          </section>
          {% endfor %}
        </main>
      </div>
    </div>