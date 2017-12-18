---
layout: default
---
<main role="main">

  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron">
    <div class="container text-center">
      <h1 class="display-2 text-uppercase">{{ site.title }}</h1>
      <p>{{ site.description }}</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div class="container mb-5">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-sm-4">
        <img class="img-fluid" src="https://chrischowme.files.wordpress.com/2017/01/research.jpg" alt="">
        <h2 class="text-primary text-uppercase text-center my-2">Researcher</h2>
        <p>I am currently a PhD Student within the Research School of Computer Science at the Australian National University.</p>
        <p>My research involves using physiological signals and deep learning models to predict topical relevance and interest in high-pressure environments.</p>
        <p>Ultimately, the goals for my research will be to improve user performance and experience while under stress or uncertainty. I plan to do this by maximising the availability and potential of biometrics in an ethical and privacy-preserving way.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-sm-4">
        <img class="img-fluid" src="https://chrischowme.files.wordpress.com/2017/01/outreach.jpg" alt="">
        <h2 class="text-primary text-uppercase text-center my-2">Communicator</h2>
        <p>I am a strong communicator who is passionate about encouraging students to pursue science, technology, engineering and math (STEM).</p>
        <p>I frequently participate in ICT outreach events in the Canberra community, and collaborate with the ANU College of Engineering and Computer Science.</p>
        <p>I have significant experience communicating with government and industry partners on cyber security matters.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-sm-4">
        <img class="img-fluid" src="https://chrischowme.files.wordpress.com/2017/01/code2.jpg" alt="">
        <h2 class="text-primary text-uppercase text-center my-2">Developer</h2>
        <p>I am a part-time full stack web developer. I love building pretty things and using web technologies to convey ideas and stories.</p>
        <p>I have built several custom web applications for ANU, including experimental platforms for my own research.</p>
        <p>Ask me about Python, JavaScript, PHP, Django, Flask, Postgres, Celery or Docker.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
  </div> <!-- /container -->
    <div class="container mb-5">   
        <div class="row marketing">
            <div class="col-sm-6">
                <h4 class="text-primary text-uppercase text-center">Recent News</h4>
                <ul class="list-group mt-4 front-list">
                    {% assign test = (site.news | sort: 'date') | reverse ) %}
                    {% for post in test limit:3 %}
                    {% assign date_format = site.minima.date_format | default: "%-d %b %Y" %}
                    <li class="list-group-item"><small class="text-muted mr-2">{{ post.date | date: date_format }}</small>
                        <dt>{{ post.title | escape }}</dt>
                        <dd>{{ post.description | escape }}</dd>
                    </li>
                    {% endfor %}
                </ul>
            </div>
            <div class="col-sm-6">
                <h4 class="text-primary text-uppercase text-center">Latest Blog Posts</h4>
                <div class="list-group mt-4 front-list">
                    {% for post in site.posts limit:3 %}
                    {% assign date_format = site.minima.date_format | default: "%-d %b %Y" %}
                    <a class="list-group-item list-group-item-action" href="{{ post.url | relative_url }}"><small class="text-muted mr-2">{{ post.date | date: date_format }}</small>{{ post.title | escape }}</a>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-5 text-center">
      <h2 class="text-primary text-uppercase">Contact</h2>
      <p>Canberra, Australia</p>
      <p>christopher.chow@anu.edu.au</p>
    </div>
</main>

