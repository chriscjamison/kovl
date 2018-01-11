$(document).ready( 
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
      ['The Twinz &rsquo;R Inn', 'the-twinz-r-inn', 'the_twinz'], 
      ['Truth Muzic', 'truth-muzic', 'truth_muzic'], 
      ['Hustle &amp; Love', 'hustle-and-love', 'hustle'], 
      ['Agree to Disagree', 'agree-to-disagree', 'agree'], 
      ['The Queen G Live Experience', 'the-queen-g-live-experience', 'queen_g'], 
      ['Travel Time with Travis', 'travel-time-with-travis', 'travel_time'], 
      ['Fabulously Vegan', 'fabulously-vegan', 'fabulously']
    ];

    header_html = "<div class=\"header-show close_menu\">\n" + 
                  "  <a href=\"#\" title=\"Close Menu\">Close Menu</a>\n" + 
                  "</div>\n";

    footer_html = "<span>Archive</span>\n";
    
    show_info_Array.forEach( 
      function (value, index) {
        var current_show = value;

        path_string = determinePathofWebpage();

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

    if ($(show_element).hasClass("close_menu")) {
      $(show_element).removeClass();
      $(show_element).addClass("header-show close_menu");
    }

    footer_selector = ".footer-archive";
    footer_element = $(footer_selector);

    $(footer_element).html(footer_html);

    var window_width = new Number();

    window_width = $(window).width();

    if (window_width <= 414)  {
      var nav_logo_selector = new String();
      var nav_logo_element = new Object();

      var lower_nav_logo_selector = new String();
      var lower_nav_logo_element = new Object();

      var nav_div_selector = new String();
      var nav_div_element = new Object();

      nav_logo_selector = "nav > div.spacer-center > a > img";
      nav_logo_element = $(nav_logo_selector);

      lower_nav_logo_selector = ".nav-logo";
      lower_nav_logo_element = $(lower_nav_logo_selector);

      var path_string = new String();
      var src_string = new String();

      path_string = determinePathofWebpage();

      src_string = path_string + "assets/img/logo/logo-top.png";

      $(nav_logo_element).attr("src", src_string);

      $(lower_nav_logo_element).remove();
    }

    $("#nav-link-shows").click(
      function () {

        var shows_menu_selector = new String();
        var shows_menu_element = new Object();
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector);
    
    
        $(shows_menu_element).css("display", "block");
      }
    );

    $(".close_menu a").click(
      function () {
        var shows_menu_selector = new String();
        var shows_menu_element = new Object();
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector);
    
        $(shows_menu_element).css("display", "none");
      }
    );
  }
);



function routeToShow()  {
  
  var player_html = new String();

  var listen_now_selector = new String();
  var listen_now_element = new Object();

  var url_string = new String();
  var path_string = new String();

  window_width = $(window).width();

  listen_now_selector = "#carouselExampleControls";
  listen_now_element = $(listen_now_selector);

  path_string = determinePathofWebpage();

  player_html = "<iframe src=\"" + path_string + "media-player/media_player.htm\" name=\"media_player\" id=\"iframe-media_player\"></iframe>";

  $(listen_now_element).append(player_html);

}

function determinePathofWebpage()  {
  var url_string = new String();
  var path_string = new String();

  url_string = window.location.pathname;
  
  if (url_string === "/kovl/" || url_string === "/kovl/index.htm")  {
    path_string = "";
  } else {
    path_string = "../";
  }

  return path_string;
}