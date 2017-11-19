function routeToShow()  {
  var current_time = new Date;
  var current_hour = new Number;
  // var current_minute = new Number;
  var user_agent = window.navigator.userAgent;

  current_hour = current_time.getUTCHours();
  // current_minute = current_time.getMinutes();

  if (current_hour >= 22)  {
    
    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href="http://test.thewuinthelou.com/media-player/discussions.htm";
    } else {
      window.open('media-player/discussions.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  } else if ((current_hour >= 0) && 
             (current_hour < 3)) {

    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href="http://test.thewuinthelou.com/media-player/easy_treatment.htm";
    } else {
      window.open('media-player/easy_treatment.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  }
}