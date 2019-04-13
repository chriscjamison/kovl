<?php
  $show_name = $_GET['show_name'];
  $show_date = $_GET['show_date'];
  $show_title = $_GET['show_title'];

  $show_name_data_Array = explode("-", $show_name);

  $image_path = "/assets/img/splash/";

  $audio_path = "/assets/recorded-shows/" . $show_name . "/" . $show_date . "/" . strtolower($show_title);
  
  switch ($show_name_data_Array[0]) {
    case "raej":
      $image_path = $image_path . "live_with_raej.jpg";

      if ($show_name_data_Array[3] === "morning") {
        $show_name = "RaeJ in the Morning";
      }
    break;
  }

  $show_title = str_replace("-", " ", $show_title);

  $show_date_data_Array = explode("/", $show_date);

  switch ($show_date_data_Array[1])	{
    case "1":
      $show_date = "Jan.";
    break;

    case "2":
      $show_date = "Feb.";
    break;

    case "3":
      $show_date = "Mar.";
    break;

    case "4":
      $show_date = "Apr.";
    break;

    case "5":
      $show_date = "May";
    break;

    case "6":
      $show_date = "Jun.";
    break;

    case "7":
      $show_date = "Jul.";
    break;

    case "8":
      $show_date = "Aug.";
    break;

    case "9":
      $show_date = "Sep.";
    break;

    case "10":
      $show_date = "Oct.";
    break;

    case "11":
      $show_date = "Nov.";
    break;

    case "12":
      $show_date = "Dec.";
    break;
  }

  $show_date = $show_date . $show_date_data_Array[2] . ", 20" . $show_date_data_Array[0];
  
  
	$audio_path = $audio_path . "--" . $show_date_data_Array[1] . "-";
			
  if (strlen($show_date_data_Array[2]) === 1)	{
    $show_date_data_Array[2] = "0" . $show_date_data_Array[2];
  }
      
  $audio_path = $audio_path . $show_date_data_Array[2] . "-" . $show_date_data_Array[0] . ".mp3";
?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="icon" href="/assets/img/favicon/favicon.png">

    <title>KOVL Radio | kovlradio.com &ndash; Recorded Shows</title>

    <!-- Typekit reference links -->
    <script src="https://use.typekit.net/zvs5kis.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    <!-- Custom CSS -->
    <link href="/assets/css/style.css?v=33" rel="stylesheet">
  </head>
  <body id="media_player-body">
    <header id="media_player-header">
      <div class="media_player-border-top"></div>
      <a href="javascript:window.close();" title="Close Window" id="media_player-link-close">Close Window</a>
    </header>
    <div id="media_player-images">
      <img src="/assets/img/logo/logo.png" width="105" height="106" alt="KOVL Radio | kovlradio.com &ndash; kovlradio.com | Rulers Over the Land" />
      <img src="<?php print $image_path; ?>" width="204" height="109" alt="<?php print $show_name; ?>" id="media_player-img-show" />
    </div>
    <div id="media_player-description">
      <h1><?php print $show_name; ?></h1>
      <span><?php print $show_date; ?></span>
      <p>
        <?php 
          print $show_title;
        ?>
      </p>
    </div>
    <img src="/assets/img/backgrounds/media_player_line-223x2.png" width="223" height="2" id="media_player-line">
    <audio controls id="media_player-audio">
      <source src="<?php print $audio_path; ?>">
    </audio>
    <div class="media_player-border-bottom"></div>

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    
    <!-- Contains the JS and jQuery to link to streams and animate the 'Shows' menu -->
    <script src="/assets/js/main.js?v=24"></script>
  </body>