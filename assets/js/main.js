$( document ).ready(function() {
    (function blink() { 
        $('.blink').fadeOut(1000).fadeIn(1000, blink); 
    })();

    function createCookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var margin = {top: 20, right: 20, bottom: 30, left: 50}, 
        width = 960 - margin.left - margin.right, 
        height = 500 - margin.top - margin.bottom;
    var valueline = d3.line().x(function(d) { return x(d.sha); }).y(function(d) { return y(d.net); });

    var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var sum = readCookie('thesis-count');
    if (sum) {
        $('#thesis-count').removeClass("blink");
        $('#thesis-count').text(sum);
    } else {
        $.ajax({
            url: "https://function-cchow-1.azurewebsites.net/api/QueryCountWebhook?code=KKkpQXBqL9MUTFEiYcpSXJXqmQmNnusC7D9oTxpYU94Zg04QkenNAg==&clientId=default",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
            success: function(data) { 
                // var sum = 0;
                for (obj in data) {
                    // sum += data[obj].net;
                    d.sha = data[obj].sha;
                    d.net = data[obj].net;
                };
                createCookie('thesis-count',sum,1);
                $('#thesis-count').removeClass("blink");
                $('#thesis-count').text(sum);
            },
            error: function(data) {
                $('#thesis-count').removeClass("blink");
                $('#thesis-count').text("Failed to connect. Please try again later.");
            }
        })
    }

    svg.append("path").data([data]).attr("class", "line").attr("d", valueline);
// Add the X Axis
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
// Add the Y Axis
    svg.append("g").call(d3.axisLeft(y));

});


