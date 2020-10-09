const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function() {

  $.ajax(
    {
      "url": "http://localhost/php-ajax-dischi/server.php",
      "method": "GET",
      "success": function(data) {
        risultati(data);
      },
      "error": function(errore) {
        alert("Errore");
      }
    }
  );

});


function risultati(data) {
  var source = $("#template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.length; i++) {
    var context = {
      "locandina": data[i]["poster"],
      "titolo": data[i]["title"],
      "autore": data[i]["author"],
      "anno": data[i]["year"]
    };
    var html = template(context);
    $(".dischi").append(html);
  };
}
