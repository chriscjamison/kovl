$(document).ready( 
  function () {
    $("#nav-link-shows").on("click", 
      function () {

        var shows_menu_selector = new String();
        var shows_menu_element = new Object();
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector)
    
    
        $(shows_menu_element).css("display", "block");
      }
    );

    $(".close_menu a").on("click", 
      function () {
        var shows_menu_selector = new String();
        var shows_menu_element = new Object();
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector)
    
    
        $(shows_menu_element).css("display", "none");
      }
    );
  }
);

function routeToShow()  {
  var current_time = new Date;
  var current_hour = new Number;
  // var current_minute = new Number;
  var user_agent = window.navigator.userAgent;

  current_hour = current_time.getUTCHours();
  // current_minute = current_time.getMinutes();

  if ((current_hour >= 0) && 
      (current_hour < 3))  {
    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href = "http://kovlradio.com/media-player/easy_treatment.htm";
    } else {
      window.open('media-player/easy_treatment.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  } else if ((current_hour >= 21) && 
             ((current_hour < 24))) {
    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href = "http://kovlradio.com/media-player/private_times.htm";
    } else {
      window.open('media-player/private_times.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  } else {
    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href = "http://kovlradio.com/media-player/live_with_raej.htm";
    } else {
      window.open('media-player/live_with_raej.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  }
}