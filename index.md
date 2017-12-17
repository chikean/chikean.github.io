---
layout: default
---
<main role="main">

  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron">
    <div class="container text-center">
      <h1 class="display-3">{{ site.title }}</h1>
      <p>{{ site.description }}</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div class="container mb-5">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
  </div> <!-- /container -->
    <div class="container mb-5">   
        <div class="row marketing">
            <div class="col-sm-6">
                <span class="text-center"><h4 class="text-primary">Recent News</h4></span>
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
                <span class="text-center"><h4 class="text-primary">Latest Blog Posts</h4></span>
                <div class="list-group mt-4 front-list">
                    {% for post in site.posts limit:3 %}
                    {% assign date_format = site.minima.date_format | default: "%-d %b %Y" %}
                    <a class="list-group-item list-group-item-action" href="{{ post.url | relative_url }}"><small class="text-muted mr-2">{{ post.date | date: date_format }}</small>{{ post.title | escape }}</a>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</main>

