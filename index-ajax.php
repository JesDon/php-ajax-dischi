<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/app.css">
    <title>Dischi</title>
  </head>
  <body>

    <header>
      <div class="logo">
        <img src="img/logo.png" alt="logo">
      </div>
    </header>
    <main>
      <div class="container">
        <div class="dischi">
        </div>
      </div>
    </main>

    <script id="template" type="text/x-handlebars-template">
      <div class="cd">
        <div class="poster">
          <img src="{{locandina}}" alt="poster">
        </div>
        <h3>{{titolo}}</h3>
        <p>{{autore}}</p>
        <p>{{anno}}</p>
      </div>
    </script>

  <script src="dist/app.js"></script>
  </body>
</html>
