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
    
    console.log("1");
        $(shows_menu_element).css("display", "none");
      }
    );
  }
);

$(window).on("load", 
  function () {
    var header_selector = new String();
    var show_selector = new String();
    var footer_selector = new String();

    var header_element = new Object();
    var show_element = new Object();
    var footer_element = new Object();

    var show_info_Array = new Array;

    var path_string = new String();

    var url_string = new String();

    var show_html = new String();
    var header_html = new String;
    var footer_html = new String();
    var archive_html = new String();

    header_selector = "#header-shows";
    header_element = $(header_selector);

    show_info_Array = [
      ['Live with RaeJ', 'live-with-raej', 'live_with_raej'], 
      ['The Easy Treatment Lounge', 'the-easy-treatment-lounge', 'easy_treatment'], 
      ['Private Times', 'private-times', 'private_times'], 
      ['The Twinz &rsquo;r Inn', 'the-twinz-r-inn', 'the_twinz'], 
      ['Truth Muzic', 'truth-muzic', 'truth_muzic']
    ];

    url_string = window.location.pathname;
    
    header_html = "<div class=\"header-show close_menu\">\n" + 
                  "  <a href=\"#\" title=\"Close Menu\">Close Menu</a>\n" + 
                  "</div>\n";

    footer_html = "<span>Archive</span>\n";
    
    show_info_Array.forEach( 
      function (value, index) {
        var current_show = value;

        if (url_string === "/kovl/" || url_string === "/kovl/index.htm")  {
          path_string = "";
        } else {
          path_string = "../";
        }
        
        show_html = "<div class=\"header-show\" id=\"show-" + current_show[2] + "\">\n";

        if (index % 2 === 0)  {
          show_html = show_html + "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\">" + current_show[0] + "</a>\n" + 
                                  "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\"><img src=\"" + path_string + "assets/img/splash/" + current_show[2] + ".jpg\" width=\"140\" height=\"75\" alt=\"" + current_show[0] + "\" /></a>\n";            
        } else {
          show_html = show_html + "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\"><img src=\"" + path_string + "assets/img/splash/" + current_show[2] + ".jpg\" width=\"140\" height=\"75\" alt=\"" + current_show[0] + "\" /></a>\n" + 
                                  "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\">" + current_show[0] + "</a>\n";
        }

        show_html = show_html + "</div>\n";

        header_html = header_html + show_html;

        archive_html = "<a href=\"" + path_string + current_show[1] + "\" title=\"" + current_show[0] + "\">" + current_show[0] + "</a>\n";
       
        footer_html = footer_html + archive_html;
      }
    );

    $(header_element).html(header_html);

    show_selector = ".header-show:even";
    show_element = $(show_selector);

    $(show_element).addClass("show-right");

    show_selector = ".header-show:odd";
    show_element = $(show_selector);

    $(show_element).addClass("show-left");

    show_selector = ".header-show:nth-child(1)";
    show_element = $(show_selector);

    $(show_element).removeClass("show-right");

    footer_selector = ".footer-archive";
    footer_element = $(footer_selector);

    $(footer_element).html(footer_html);
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