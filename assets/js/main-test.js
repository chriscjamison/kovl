$(document).ready( 
  function () {
		var url_hash;
		var url_hash_search_string;
		
		url_hash = window.location.hash;
		url_hash_search_string = "message=complete";
		
		if (url_hash.indexOf(url_hash_search_string) > -1)	{
			loadConfirmationMessage();
		}
		
    var header_selector;
    var show_selector;
		var footer_archive_selector;
		var footer_actions_selector;

    var header_element = {};
    var show_element = {};
		var footer_archive_element = {};
		var footer_actions_element = {};

		var show_info_Array;
		var footer_actions_Array;

    var path_string;

		var show_html;
    var header_html;
		var footer_archive_html;
		var footer_actions_html;
    var archive_html;

    header_selector = "#header-shows";
    header_element = $(header_selector);

    show_info_Array = [
      ['Live with RaeJ &amp; Brown Shuga Sunday Brunch', 'live-with-raej', 'live_with_raej'], 
      ['The Easy Treatment Lounge', 'the-easy-treatment-lounge', 'easy_treatment'], 
      ['Private Times', 'private-times', 'private_times'], 
			['The Twinz &rsquo;R Inn', 'the-twinz-r-inn', 'the_twinz'],			
      ['Agree to Disagree', 'agree-to-disagree', 'agree'],
			['The Dressing Room', 'the-dressing-room', 'dressing'], 
			['Food for your Soul &amp; Friday Forum...', 'food-for-your-soul', 'food'], 
			['Truth Muzic &amp; The Table of Truth', 'truth-muzic', 'truth_muzic'], 
			['Imagine That', 'imagine-that', 'imagine'],
			['What We Doing', 'what-we-doing', 'what_we_doing']
    ];

		path_string = determinePathofWebpage();

    header_html = "<div class=\"header-show close_menu\">\n" + 
									"  <a href=\"#\" title=\"Close Menu\">Close Menu</a>\n" + 
									"  <a href=\"" + path_string + "/recorded-shows/recorded_shows.htm\" title=\"Recorded Shows\" id=\"header-link-recorded\">Recorded Shows</a>\n" + 

                  "</div>\n";

    footer_archive_html = "<span>Shows</span>\n";
		
		var window_width;

    window_width = $(window).width();
    
    show_info_Array.forEach( 
      function (value, index) {
        var current_show = value;

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
      
        footer_archive_html = footer_archive_html + archive_html;
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

    footer_archive_selector = ".footer-archive";
    footer_archive_element = $(footer_archive_selector);

		$(footer_archive_element).html(footer_archive_html);
		
		footer_actions_Array = [
			["#", "Listen Now"], 
			["recorded-shows/recorded_shows.htm", "Recorded Shows"], 
			["company/about-kovl.htm", "About KOVL"], 
			["javascript:loadContactForm();", "Contact KOVL"] 
		];

		footer_actions_html = "";

		footer_actions_Array.forEach( 
      function (value, index) {
				var current_link = value;

				if (index !== 3) {
					footer_actions_html = footer_actions_html + "<a href=\"" + path_string + current_link[0] + "\" title=\"" + current_link[1] + "\">" + current_link[1] + "</a>\n";

					if (index === 1)	{
						footer_actions_html = footer_actions_html + "<br />\n";
					}
				}	else {
					footer_actions_html = footer_actions_html + "<a href=\"" + current_link[0] + "\" title=\"" + current_link[1] + "\">" + current_link[1] + "</a>\n";
				}
			}
		);

		footer_actions_selector = ".footer-actions";
		footer_actions_element = $(footer_actions_selector);

		$(footer_actions_element).html(footer_actions_html);        

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
				
				var nav_selector;
				var nav_element = {};
				var nav_css_class;

				nav_selector = "nav";
				nav_element = $(nav_selector);
				nav_css_class = "nav-shows_visible";

				var nav_logo_selector;
				var nav_logo_element = {};
				var nav_logo_css_class;

				nav_logo_selector = ".nav-logo";
				nav_logo_element = $(nav_logo_selector);
				nav_logo_css_class = "nav-logo nav-logo-shows_visible";

				var container_selector;
				var container_element = {};
				var container_css_class;

				container_selector = ".container";
				container_element = $(container_selector);
				container_css_class = "container container-shows_visible";

				$(nav_element).removeClass();

				$(nav_element).addClass(nav_css_class);
				$(nav_logo_element).addClass(nav_logo_css_class);
				$(container_element).addClass(container_css_class);
    
        $(shows_menu_element).css("display", "block");
      }
    );

    $(".close_menu a").click(
      function () {
        var shows_menu_selector;
        var shows_menu_element = {};
    
        shows_menu_selector = "#header-shows";
				shows_menu_element = $(shows_menu_selector);

				var nav_selector;
				var nav_element = {};
				var nav_css_class;

				nav_selector = "nav";
				nav_element = $(nav_selector);
				nav_css_class = "nav-shows_visible";
				
				var nav_logo_selector;
				var nav_logo_element = {};
				var nav_logo_css_class;

				nav_logo_selector = ".nav-logo";
				nav_logo_element = $(nav_logo_selector);
				nav_logo_css_class = "nav-logo-shows_visible";

				var container_selector;
				var container_element = {};
				var container_css_class;

				container_selector = ".container";
				container_element = $(container_selector);
				container_css_class = "container-shows_visible";

				$(nav_element).removeClass(nav_css_class);
				$(nav_logo_element).removeClass(nav_logo_css_class);
				$(container_element).removeClass(container_css_class);
    
        $(shows_menu_element).css("display", "none");
      }
    );
		
		$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").focusin(
			function () {
				var input_element = {};
				
				input_element = this;
				
				verifyFields(input_element, "focus");
				
			}
		);
		
		$("#input-contact-full_name, #input-contact-email_address, #input-contact-message").blur(
			function () {
				var input_element = {};
				
				input_element = this;
				
				verifyFields(input_element, "blur");
			}
		);
		
		$("#contact-bkgrnd").click(
			function ()	{
				var div_element;
				
				div_element = this;
				
				if ($(div_element).css("display") === "block")	{
					closeConfirmationMessage();
				}
			}
		);

		$(".recorded-link-show").click(
			function ()	{
				var link_element = {};

				link_element = this;

				loadRecordedShowContent(link_element);
			}
		)
  }
);	



function routeToShow()  {
  var player_html;

  var listen_now_selector;
  var listen_now_element = {};

  var path_string;

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

function loadConfirmationMessage()	{
	var div_selector_1;
	var div_selector_2;
	
	var div_element_1;
	var div_element_2;
	
	div_selector_1 =  "#contact-confirmation_message";
	div_element_1 = $(div_selector_1);
	
	div_selector_2 =  "#contact-bkgrnd";
	div_element_2 = $(div_selector_2);
	
	var visible_css = {};
		
	block_visible_css = {
		display: "block"
	};
	
	fixed_visible_css = {
		display: "fixed"
	};

	$(div_element_1).css(block_visible_css);
	$(div_element_2).css(block_visible_css);
	$(div_element_1).css(fixed_visible_css);
}

function closeConfirmationMessage()	{
	var div_selector;
	var div_elements;
	
	div_selector = "#contact-confirmation_message, #contact-bkgrnd";
	div_elements = $(div_selector);
	
	var visible_css = {};
	
	visible_css = {
		display: "none"
	}
	
	$(div_elements).css(visible_css);
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
		borderColor: "#a5bcbb", 
		backgroundColor: "#fff", 
		color: "#a2a2a1"
	};
	
	color_valid_css = {
		borderColor: "#a5bcbb", 
		backgroundColor: "#fff",
		color: "#000"
	};
	
	color_error_css = {
		borderColor: "#d46a6a", 
		backgroundColor: "#ffaaaa", 
		color: "#aa3939"
	};
	
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var default_value_string;
	var error_value_string;

	switch (field_selector) {
		case "input-contact-full_name":
			default_value_string = "First and Last Name";
			error_value_string = "Please enter your First and Last Name";
			
			if (field_value === error_value_string) { 
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else {
				if (field_value !== default_value_string && 
					field_status === "blur")	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				}	
			}
		break; 

		case "input-contact-email_address":
			default_value_string = "____@_______.___";
			error_value_string = "Please retype your email address";
			
			if ((field_value === default_value_string || 
					 field_value === error_value_string) && 
				 	(field_status === "focus")) {
				clearData(input_element, color_valid_css);
			} else if (field_status === "blur") { 
				if (field_value.length > 7)	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				} else {
					resetData(input_element, default_value_string, color_base_css);
				}
			} 
		break;

		case "input-contact-message":
			default_value_string = "Type your message here";
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else if (field_value !== default_value_string) {
				$(input_element).css(color_valid_css);
			}
		break;
	}
}

function validateData(input_element, error_value_string, color_valid_css, color_error_css)	{
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var search_string;
	var search_index_num;
	
	switch ($(input_element).attr("id"))	{
		case "input-contact-full_name": 

			search_string = " ";
			search_index_num = field_value.indexOf(search_string);

			if (search_index_num > 1)	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
		break;

		case "input-contact-email_address": 
			var search_string_Array;
			var email_string;

			search_string_Array = [
				"@", 
				".", 
				"com", 
				"net", 
				"org", 
				"mil", 
				"edu"
			];

			email_string = field_value;

			var is_valid_results_Array;
			var inc;

			is_valid_results_Array = [];
			inc = 0;

			search_string_Array.forEach(
				function (item, index)	{
					var search_string;
					var search_result_num;

					search_string = item;


					search_result_num = email_string.indexOf(search_string);

					if (search_result_num > -1)	{
						is_valid_results_Array[index] = true;
					} else {
						is_valid_results_Array[index] = false;
					}
				}
			);
						
			var is_valid;
			
			is_valid = false;
			
			if (is_valid_results_Array[0] === true &&  
				 	is_valid_results_Array[1] === true)	{
				var i;
			
				for (i = 2; i < is_valid_results_Array.length; i++)	{
					if (is_valid_results_Array[i] === true)	{
						is_valid = true;
					}
				}	
			}	else {
				is_valid = false;
			}
			
			if (is_valid === true)	{
				$(input_element).css(color_valid_css);
			} else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
			
		break;
		
	}
}

function clearData(input_element, color_valid_css)	{
	$(input_element).val("");
	$(input_element).css(color_valid_css);
}

function resetData(input_element, default_value_string, color_base_css) {
	$(input_element).css(color_base_css);
	$(input_element).val(default_value_string);	
}

function loadRecordedShowContent(link_element)	{
	var media_player_window = window.open("/recorded-shows/media_player.htm", "media_player", "width=360,height=420,menubar=no,status=no");
	
	var link_id_info;
	var link_data_Array = [];
	
	link_id_info = $(link_element).attr("id");
	
	link_data_Array = link_id_info.split("-");

	var dir_info;

	dir_info = link_data_Array[3];

	dir_info = dir_info.replace(/_/g, "-");

	var image_path;

	image_path = "/assets/img/splash/";

	if (dir_info.indexOf("raej") > -1)	{
		image_path = image_path + "live_with_raej.jpg";
	}

	var date_of_show_Array;

	date_of_show_Array = link_data_Array[4].split("_");

	var show_path;

	show_path = "/assets/recorded_shows/" + dir_info + "/" + date_of_show_Array[2] + "/" + date_of_show_Array[1] + "/" + date_of_show_Array[0];

	var show_img_selector;
	var show_img_element = {};

	show_img_selector = "#media_player-img-show";
	show_img_element = $(show_img_selector);

	var media_player_window_element = {};

	// media_player_html = media_player_window.$('body');

	// show_img_element = media_player_window.$('body').children(show_img_selector);
	
	// $(media_player_html).getElementById("media_player-img-show").attr("src", image_path);
	
console.log("$(show_img_element).attr(\"src\") = " + media_player_window.$('body').html());
	

}