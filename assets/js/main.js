$( document ).ready(function() {
    function createCookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    if (!(document.cookie.indexOf('thesis-count') >= 0)) { 
        createCookie('thesis-count',true,1);
        $.ajax({
         url: "https://function-cchow-1.azurewebsites.net/api/QueryCountWebhook?code=KKkpQXBqL9MUTFEiYcpSXJXqmQmNnusC7D9oTxpYU94Zg04QkenNAg==&clientId=default",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
         success: function(data) { 
			var sum = 0;
			for (obj in data) {
				sum += data[obj].net;
			};
			$('#thesis-count').text(sum);
		 }
      });
    }
});


