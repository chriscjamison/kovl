function routeToShow()  {
  var time_of_day = new Date;
  var user_agent = window.navigator.userAgent;

  time_of_day = time_of_day.getUTCHours();

  if ((time_of_day >= -2) && 
      (time_of_day < 0))  {

    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href="http://test.thewuinthelou.com/media-player/discussions.htm";
    } else {
      window.open('media-player/discussions.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  } else if ((time_of_day >= 0) && 
             (time_of_day < 3)) {

    if (user_agent.indexOf("Mac OS X") > -1) {
      window.location.href="http://test.thewuinthelou.com/media-player/easy_treatment.htm";
    } else {
      window.open('media-player/easy_treatment.htm', 'media_player', 'width=640,height=480,location=no,menubar=no,resizeable=no,status=no,toolbar=no');
    }
  }
}