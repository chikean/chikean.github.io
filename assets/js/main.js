$( document ).ready(function() {
    (function blink() { 
        $('.blink').fadeOut(500).fadeIn(500, blink); 
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

    var sum = readCookie('thesis-count');
    if (sum) {
        $('#thesis-count').text(sum);
    } else {
        $.ajax({
            url: "https://function-cchow-1.azurewebsites.net/api/QueryCountWebhook?code=KKkpQXBqL9MUTFEiYcpSXJXqmQmNnusC7D9oTxpYU94Zg04QkenNAg==&clientId=default",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
            success: function(data) { 
                var sum = 0;
                for (obj in data) {
                    sum += data[obj].net;
                };
                createCookie('thesis-count',sum,1);
                $('#thesis-count').removeClass("blink");
                $('#thesis-count').text(sum);
		    }
        })
    }
});


