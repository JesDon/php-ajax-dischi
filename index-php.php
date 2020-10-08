<?php include "db.php"; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">;
    <link rel="stylesheet" href="dist/app.css">
    <title>Dischi</title>
  </head>
  <body>

    <header>
      <div class="logo">
        <!-- <img src="img/logo.png" alt=""> -->
      </div>
    </header>

    <main>
      <div class="container">
        <div class="dischi">
          <?php foreach ($database as $cd) { ?>
            <div class="cd">
              <div class="poster">
                <img src="<?php echo $cd["poster"]; ?>" alt="">
              </div>
              <h3><?php echo $cd["title"]; ?></h3>
              <p><?php echo $cd["author"]; ?></p>
              <p><?php echo $cd["year"]; ?></p>
            </div>
          <?php } ?>
        </div>
      </div>
    </main>

  </body>
</html>
