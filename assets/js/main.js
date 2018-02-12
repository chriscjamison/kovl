$(document).ready( 
  function () {
    var header_selector;
    var show_selector;
    var footer_selector;

    var header_element = {};
    var show_element = {};
    var footer_element = {};

    var show_info_Array;

    var path_string;

		var show_html;
    var header_html;
    var footer_html;
    var archive_html;

    header_selector = "#header-shows";
    header_element = $(header_selector);

    show_info_Array = [
      ['Live with RaeJ', 'live-with-raej', 'live_with_raej'], 
      ['The Easy Treatment Lounge', 'the-easy-treatment-lounge', 'easy_treatment'], 
      ['Private Times', 'private-times', 'private_times'], 
      ['The Twinz &rsquo;R Inn', 'the-twinz-r-inn', 'the_twinz'], 
      ['Truth Muzic', 'truth-muzic', 'truth_muzic'], 
      ['Hustle in Love', 'hustle-in-love', 'hustle'], 
      ['Agree to Disagree', 'agree-to-disagree', 'agree'], 
      ['The Queen G Live Experience', 'the-queen-g-live-experience', 'queen_g'], 
      ['The King &amp; I All Sports Show', 'the-king-and-i-all-sports-show', 'the_king'], 
      ['Fabulously Vegan', 'fabulously-vegan', 'fabulously'], 
			['Monday Motivation!', 'monday-motivation', 'monday']
    ];

    header_html = "<div class=\"header-show close_menu\">\n" + 
                  "  <a href=\"#\" title=\"Close Menu\">Close Menu</a>\n" + 
                  "</div>\n";

    footer_html = "<span>Shows</span>\n";
		
		var window_width;

    window_width = $(window).width();
    
    show_info_Array.forEach( 
      function (value, index) {
        var current_show = value;

        path_string = determinePathofWebpage();

        show_html = "<div class=\"header-show\" id=\"show-" + current_show[2] + "\">\n";
				
				if (window_width <= 1024)	{
					if (index % 2 === 0)  {
						show_html = show_html + "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\">" + current_show[0] + "</a>\n" + 
																		"  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\"><img src=\"" + path_string + "assets/img/splash/" + current_show[2] + ".jpg\" width=\"140\" height=\"75\" alt=\"" + current_show[0] + "\" /></a>\n";            
					} else {
						show_html = show_html + "  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\"><img src=\"" + path_string + "assets/img/splash/" + current_show[2] + ".jpg\" width=\"140\" height=\"75\" alt=\"" + current_show[0] + "\" /></a>\n" + 
																		"  <a href=\"" + path_string + current_show[1] + "/\" title=\"" + current_show[0] + "\">" + current_show[0] + "</a>\n";
					}	
				}	else {
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
		
		if (window_width <= 1024)	{
			show_selector = ".header-show:even";
			show_element = $(show_selector);

			$(show_element).addClass("show-right");

			show_selector = ".header-show:odd";
			show_element = $(show_selector);

			$(show_element).addClass("show-left");
		} else {
			show_selector = ".header-show";
			show_element = $(show_selector);
			
			$(show_element).addClass("display-wide");
		}

    show_selector = ".header-show:nth-child(1)";
    show_element = $(show_selector);

    if ($(show_element).hasClass("close_menu")) {
      $(show_element).removeClass();
      $(show_element).addClass("header-show close_menu");
    }

    footer_selector = ".footer-archive";
    footer_element = $(footer_selector);

    $(footer_element).html(footer_html);

    if (window_width <= 1024)  {
      var nav_logo_selector;
      var nav_logo_element = {};

      var lower_nav_logo_selector;
      var lower_nav_logo_element = {};

      nav_logo_selector = "nav > div.spacer-center > a > img";
      nav_logo_element = $(nav_logo_selector);

      lower_nav_logo_selector = ".nav-logo";
      lower_nav_logo_element = $(lower_nav_logo_selector);

      var src_string;

      path_string = determinePathofWebpage();

      src_string = path_string + "assets/img/logo/logo-top.png";

      $(nav_logo_element).attr("src", src_string);

      $(lower_nav_logo_element).remove();
    }

		
		
    $("#nav-link-shows").click(
      function () {

        var shows_menu_selector;
        var shows_menu_element = {};
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector);
    
    
        $(shows_menu_element).css("display", "block");
      }
    );

    $(".close_menu a").click(
      function () {
        var shows_menu_selector;
        var shows_menu_element = {};
    
        shows_menu_selector = "#header-shows";
        shows_menu_element = $(shows_menu_selector);
    
        $(shows_menu_element).css("display", "none");
      }
    );
		
		$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").focusin(
			function () {
				var input_element = {};
				var color_css = {};
				
				input_element = this;
				
				color_css = {
					color: "#000"
				};
				
				verifyFields(input_element, "focus");
				
			}
		);
		
		$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").blur(
			function () {
				var input_element = {};
				var color_css = {};
				
				input_element = this;
				
				verifyFields(input_element, "blur");
								
				$(input_element).css(color_css);
			}
		);
		
		$("#input-contact-reset").click(
			function ()	{
				var full_name_selector;
				var full_name_element = {};
				
				var email_selector;
				var email_element = {};
				
				var message_selector;
				var message_element = {};
				
				verifyFields(input_element, "focus");
			})
  }
);



function routeToShow()  {
  
  var player_html;

  var listen_now_selector;
  var listen_now_element = {};

  var path_string;

  window_width = $(window).width();

  listen_now_selector = "#carouselExampleControls";
  listen_now_element = $(listen_now_selector);

  path_string = determinePathofWebpage();

  player_html = "<h3>KOVL LiveStream</h3>\n" + 
								"<iframe src=\"" + path_string + "media-player/media_player.htm\" name=\"media_player\" id=\"iframe-media_player\"></iframe>";

  $(listen_now_element).append(player_html);

}

function determinePathofWebpage()  {
  var url_string;
  var path_string;

  url_string = window.location.pathname;
  
  if (url_string === "/" || url_string === "/index.htm")  {
    path_string = "";
  } else {
    path_string = "../";
  }

  return path_string;
}

function loadContactForm()	{
	
	var div_selector;
	var div_element = {};
	
	div_selector = "#content-form-contact, #contact-bkgrnd";
	div_element = $(div_selector);
	
	$(div_element).css("display", "block");
}

function closeContactForm()	{
	var div_selector;
	var div_element = {};
	
	div_selector = "#content-form-contact, #contact-bkgrnd";
	div_element = $(div_selector);
	
	$(div_element).css("display", "none");
}

function verifyFields(input_element, field_status) {
	var color_base_css = {};
	var color_valid_css = {};
	var color_error_css = {};
	
	color_base_css = {
		color: "#a2a2a1"
	};
	
	color_valid_css = {
		color: "#000"
	};
	
	color_error_css = {
		color: "#AA3939"
	};
//console.log("$(input_element).attr(\"id\") = " + $(input_element).attr("id"));
//console.log("$(input_element).val().length = " + $(input_element).val().length);
//	console.log("$(input_element).val() = " + $(input_element).val());
	
	switch ($(input_element).attr("id")) {
		case "input-contact-full_name":
			if ($(input_element).val() === "Please enter your First and Last Name") {
				clearAndResetData(input_element, color_valid_css);
			}
			
			if ($(input_element).val() === "First and Last Name") {
				if (field_status === "focus")	{
					clearAndResetData(input_element, color_valid_css);
				}	else {
					$(input_element).css(color_base_css);
				}
			}
			
			if ($(input_element).val().length === 0) {
				if (field_status === "blur")	{
					$(input_element).css(color_base_css);
					$(input_element).val("First and Last Name");	
				}
			} 
			
			if ($(input_element).val() !== "First and Last Name" && 
					field_status === "blur")	{
					validateData(input_element, color_valid_css, color_error_css);
			}
		break; 

		case "input-contact-email_address":
			if ($(input_element).val().length < 5 ||  
					$(input_element).val() !== "____@_______.___") {
				$(input_element).css(color_base_css);
				$(input_element).val("____@_______.___");
			} else {
				if ($(input_element).val() === "____@_______.___" && 
					  field_status === "focus") {
					$(input_element).val("");
				}
				
				$(input_element).css(color_valid_css);
			}
		break;

		case "input-contact-message":
			if ($(input_element).val() === "Type your message here") {
				if (field_status === "focus")	{
					$(input_element).val("");
					$(input_element).css(color_valid_css);
				}	else {
					$(input_element).css(color_base_css);
				}
			}
			
			if ($(input_element).val().length === 0) {
				if (field_status === "blur")	{
					$(input_element).css(color_base_css);
					$(input_element).val("Type your message here");	
				}
			} 
			
			if ($(input_element).val() !== "Type your message here") {
				$(input_element).css(color_valid_css);
			}
		break;
	}
}

function validateData(input_element, color_valid_css, color_error_css)	{
	var search_string;
	var search_index_num;
/*console.log("validateData");
console.log("$(input_element).attr(\"id\") = " + $(input_element).attr("id"));
*/	switch ($(input_element).attr("id"))	{
		case "input-contact-full_name": 
			
			search_string = " ";
			search_index_num = $(input_element).val().indexOf(search_string);

			if (search_index_num > 1)	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val("Please enter your First and Last Name");
			}
		break;
	}
}

function clearAndResetData(input_element, color_valid_css)	{
	$(input_element).val("");
	$(input_element).css(color_valid_css);
}