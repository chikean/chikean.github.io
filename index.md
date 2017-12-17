---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<div class="container-fluid">
      <div class="row">
          <nav class="col-sm-4 col-md-3 d-none d-sm-block sidebar bg-primary" id="sidebar">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#home"><span class="sr-only">(current)</span>
                <span class="d-none d-lg-block">
          <div class="w-100">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="{{ "/assets/img/myAvatar.svg" | relative_url }} " alt="">
          </div>
        </span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#interests">Interests</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#community">Community</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#awards">Awards</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#publications">Publications</a>
              </li>
            </ul>
          </nav>
        <main class="col-sm-8 offset-sm-4 col-md-9 offset-md-3">
          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="home">
            <div class="my-auto">
              <h1 class="display-2 text-uppercase">Chris Chow</h1>
              <p class="lead">Researcher, developer, data scientist, communicator.</p>
            </div>
          </section>
          {% assign sorted = site.resume | sort: 'order' %}
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