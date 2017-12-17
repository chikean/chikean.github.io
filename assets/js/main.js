$( document ).ready(function() {
    // (function blink() { 
    //     $('.blink').fadeOut(1000).fadeIn(1000, blink); 
    // })();

    // function createCookie(name, value, days) {
    //     var expires;

    //     if (days) {
    //         var date = new Date();
    //         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //         expires = "; expires=" + date.toGMTString();
    //     }
    //     document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    // }

    // function readCookie(name) {
    //     var nameEQ = name + "=";
    //     var ca = document.cookie.split(';');
    //     for(var i=0;i < ca.length;i++) {
    //         var c = ca[i];
    //         while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //     }
    //     return null;
    // }

    var margin = {top: 20, right: 20, bottom: 30, left: 50}, 
        width = 600 - margin.left - margin.right, 
        height = 400 - margin.top - margin.bottom;

    var parseTime = d3.utcParse("%Y-%m-%dT%H:%M:%SZ");

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var div = d3.select("#thesis-visualiser").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var svg = d3.select("#thesis-visualiser").append("svg")
        .attr("viewBox","0 0 " + (width + margin.right + margin.left) + " " + (height + margin.top + margin.bottom))
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var debug = true;
    if (!debug) {
        $('#thesis-count').removeClass("blink");
        $('#thesis-count').text(sum);
    } else {
        $.ajax({
            url: "https://function-cchow-1.azurewebsites.net/api/QueryCountWebhook?code=KKkpQXBqL9MUTFEiYcpSXJXqmQmNnusC7D9oTxpYU94Zg04QkenNAg==&clientId=default",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
            success: function(data) { 
                
                var cumulative = data.reduce(function(d, i) {
                    d.push((d.length && d[d.length -1] || 0) + i.net);
                    return d;
                }, []);

                data.forEach(function(d, i) {
                    d.time = parseTime(d.time);
                    d.net = +d.net;
                    d.cumulative = cumulative[i];
                });

                x.domain(d3.extent(data, function(d) {return d.time; }));
                y.domain(d3.extent(data, function(d) {return d.cumulative; }));

                // Add the X Axis
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).ticks(5).tickFormat(d3.timeFormat("%b %y")));

                // Add the Y Axis
                svg.append("g")
                    .call(d3.axisLeft(y));
                
                var valueline = d3.line()
                    .x(function(d) { return x(d.time); })
                    .y(function(d) { return y(d.cumulative); });

                // Add the path
                svg.append("path")
                    .attr("d", valueline(data))
                    .attr('stroke', 'green')
                    .attr('stroke-width', 2)
                    .attr('fill', 'none');

                // Add dots with tooltips
                svg.selectAll("dot")
                    .data(data)
                    .enter().append("circle")
                    .attr("r", 3)
                    .attr("cx", function(d) { return x(d.time); })
                    .attr("cy", function(d) { return y(d.cumulative); })
                    .on("mouseover", function(d) {
                        div.transition()
                            .duration(0)
                            .style("opacity", 1)
                        var html = '<span class="font-weight-bold">' + d.cumulative + ' total words.</span><br>'
                        + '<span class="text-muted">' + d.time + "</span><br>" 
                        + '<span class="text-success">' + d.added + ' words added.</span>' + '<br>'
                        + '<span class="text-danger">' + d.deleted + ' words removed.</span>' + '<br>'
                        + '<span class="text-dark">' + d.net + ' net difference.</span>';
                        div.html(html)
                            .style("left", (d3.event.pageX + 50) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                    })
                    // .on("mouseout", function(d) {
                    //     div.transition()
                    //         .duration(500)
                    //         .style("opacity", 0);
                    // })

                // createCookie('thesis-count',sum,1);
                // $('#thesis-count').removeClass("blink");
                // $('#thesis-count').text(sum);
            },
            error: function(data) {
                $('#thesis-count').removeClass("blink");
                $('#thesis-count').text("Failed to connect. Please try again later.");
            }
        })
    }


});


