/*
	Project Name : Museum
	
	- Responsive Caret Dropdown open
	- Responsive Panel Resize
	- Gallery
	- Contact Section
	- History Section
	- Venu Section 2
	- Events List
	- Google Map
	
	## Document Scroll		

	## Document Ready
		- Scrolling Navigation
		- Go to Next
		- Responsive Caret
		- Expand Panel
		- Revolution Slider
		- History Section
		- Testimonial Carousel
		- Testimonial Section 2
		- Counter Section
		- Venu Section 2
		- Events List
		- Gallery Section
		- Client Carousel
		- Video Section
		- Event Map
		- Blog
		- Contact Map
		- Quick Contact Form

	## Window Load
		-- Site Loader
*/

(function($) {

	"use strict"
	
	/* - Responsive Caret Dropdown open */
	function menu_dropdown_open(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".ow-navigation .nav li.ddl-active").length ) {
				$(".ow-navigation .nav > li").removeClass("ddl-active");
				$(".ow-navigation .nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			$(".ow-navigation .nav li .dropdown-menu").removeAttr("style");
		}
	}
	
	/* - Responsive Panel Resize */
	function panel_resize(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".header-section #slidepanel").length ) {
				$(".header-section #slidepanel").removeAttr("style");
			}
		}
	}
	
	/* - Gallery */
	function gallery() {
		if($(".gallery-fitrow").length){
			var $container = $(".gallery-fitrow");
			$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: ".gallery-box",
				gutter: 0,
				transitionDuration: "0.5s"
			});
			
			$("#filters a").on("click",function(){
				$('#filters a').removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr("data-filter");
				$container.isotope({ filter: selector });		
				return false;
			});
		}
	}
	
	/* - Contact Section */
	function cnt_box_height() {	
		if($(".contact-section .cnt-detail-box").length) {
			var maxHeight = 0;
			$(".cnt-detail-box").each(function(){
			   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
			});
			$(".cnt-detail-box").height(maxHeight);
		}
	}
	
	/* - History Section */
	function history_img() {
		var width = $(window).width();
		var history_content_height = $(".history-section .history-details").height();
		if ( width >= 992 ) {
			$( ".history-section .img-block" ).removeAttr("style");
			$( ".history-section .img-block img" ).remove();
			var history_image = $(".history-section .img-block").attr("data-image");
			$( ".history-section .img-block" ).css({"background-image":"url('" + history_image + "')","height": history_content_height });
		} else {
			$( ".history-section .img-block" ).removeAttr("style");
			$( ".history-section .img-block img" ).remove();
			var history_image = $(".history-section .img-block").attr("data-image");
			$( ".history-section .img-block" ).append("<img src='"+ history_image +"' />")
		}
	}
	
	/* - Venu Section 2 */
	function venu_img() {
		var width = $(window).width();
		var venu_section_height = $(".venu-section-2").height();
		if ( width >= 992 ) {
			$( ".venu-img" ).removeAttr("style");
			$( ".venu-img img" ).remove();
			var venu_img = $(".venu-img").attr("data-image");
			$( ".venu-img" ).css({"background-image":"url('" + venu_img + "')","height": venu_section_height });
		} else {
			$( ".venu-img" ).removeAttr("style");
			$( ".venu-img img" ).remove();
			var venu_img = $(".venu-img").attr("data-image");
			$( ".venu-img" ).append("<img src='"+ venu_img +"' />")
		}
	}
	
	/* - Events List */
	function event_list() {
		$(".event-section2 .events-content .events-list .events-list-box").each(function(index){
			$(".event-section2 .events-content .events-list .events-list-box > div").removeAttr("style");
			var event_height = $(".event-section2 .events-content .events-list .events-list-box").eq(index).height();
			if( event_height > 80 ) {
				$(".event-section2 .events-content .events-list .events-list-box > div").css("height",event_height);
			} else {
				$(".event-section2 .events-content .events-list .events-list-box > div").css("min-height","80px");
			}
		});
	}
	function event_img_block() {
		var width = $(window).width();
		var event_height = $(".event-section2").height();
		if ( width >= 992 ) {
			$(".event-section2 .event-img-block").removeAttr("style");
			$( ".event-section2 .event-img-block > img" ).remove();
			var event_image = $(".event-section2 .event-img-block").attr("data-image");
			$( ".event-section2 .event-img-block" ).css({"background-image":"url('" + event_image + "')","height": event_height });
		} else {
			$(".event-section2 .event-img-block").removeAttr("style");
			$( ".event-section2 .event-img-block > img" ).remove();
			var event_image = $(".event-section2 .event-img-block").attr("data-image");
			$( ".event-section2 .event-img-block" ).prepend("<img src='"+ event_image +"' />")
		}
		if ( width >= 992 ) {
			var event_img_block_height = $(".event-section2 .event-img-block").height();
			var event_img_content_height = $(".event-section2 .event-img-block .event-img-content-box").height();
			var event_img_content_padding = ( event_img_block_height - event_img_content_height ) / 2 ;
			$(".event-section2 .event-img-block").css({"padding-top":event_img_content_padding,"padding-bottom":event_img_content_padding});
		} else {
			$(".event-section2 .event-img-block").removeAttr("style");
		}
	}
	
	/* - Google Map */
	function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = "images/marker.png";
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);		
		var styles = [
			{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40}]},
			{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#000000"},{"lightness": 16}]},
			{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 20}]},
			{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},
			{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},
			{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 21}]},
			{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 17}]},
			{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 29},{"weight": 0.2}]},
			{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},
			{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 16}]},
			{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 19}]},
			{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 17}]}
		]
		
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);	
		
		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");
		
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map,marker);
		});	
	}
	
	
	function sticky_menu() {
		var menu_scroll = $(".header-section").offset().top;
		var scroll_top = $(window).scrollTop();

		if ( scroll_top > menu_scroll ) {
			$(".header-section .menu-block").addClass("navbar-fixed-top animated fadeInDown");
		} else {
			$(".header-section .menu-block").removeClass("navbar-fixed-top animated fadeInDown"); 
		}
	};	
		
	/* ## Document Ready - Handler for ready() called */
	$(document).on("ready",function() {

		/* - Scrolling Navigation */
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Set Sticky Menu */
		if( $(".header-section").length ) {

			sticky_menu();
		}
		
		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click", function(e) {
	
			var $anchor = $(this);
			
			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");
			
			e.preventDefault();
		});
		
		/* - Go to Next */
		$('.goto-next a').on('click', function(event)
		{
			var anchor = $(this);
			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 49 }, 1500, 'easeInOutExpo' );			
				}
				event.preventDefault();
			}
		});

		/* - Responsive Caret */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Expand Panel */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		/* Collapse Panel */
		$("#closeit").on("click", function() {
			$("#slidepanel").slideUp("slow");
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click */
		$("#toggle a").on("click", function() {
			$("#toggle a").toggle();
		});	
		
		panel_resize();
		
		/* - Revolution Slider */
		if($(".slider-section").length){
			$("#home-slider1").revolution({
				sliderType:"standard",
				delay:6000,
				responsiveLevels:[1920,1025,768,480],
				gridwidth:[1920,1025,768,480],
				gridheight:[788,788,570,400],
				navigation: {
					arrows:{
						enable:true,
						style:"uranus"
					}
				},
			});
			$("#home-slider2").revolution({
				sliderType:"standard",
				delay:6000,
				responsiveLevels:[1920,1025,768,480],
				gridwidth:[1920,1025,768,480],
				gridheight:[919,788,570,480],
				navigation: {
					arrows:{
						enable:true,
						style:"uranus"
					}
				},
			});
		}
		
		/* - History Section */
		if( $(".history-section").length ) {
			history_img();
		}
		
		/* - Testimonial Carousel */
		if( $(".testimonial-carousel").length ) {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					992:{
						items: 2
					}
				}
			});
		}
		
		/* - Testimonial Section 2 */
		if( $(".testimonial-section2").length ) {
			$("#testimonial2").on('slid.bs.carousel', function () {
				$( "ol.testi-thumb li.active" ).removeClass('active');
				var idx = $('div.active').index('div.item');
				$('ol.testi-thumb li[data-slide-to="'+ idx+'"]').addClass('active');
			});
			
			$('ol.testi-thumb  li').on("click",function(){ 
				$('ol.testi-thumb li.active').removeClass("active");
				$(this).addClass("active");
			});
		}
		
		/* - Counter Section */
		if($(".counter-section").length) {
			$( ".counter-section" ).each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					var statistics_item_count = 0;
					var statistics_count = 0;					
					statistics_item_count = $( "[id*='statistics_count-']" ).length;
					 
					for(var i=1; i<=statistics_item_count; i++)
					{
						statistics_count = $( "[id*='statistics_count-"+ i +"']" ).attr( "data-statistics_percent" );
						$("[id*='statistics_count-"+ i +"']").animateNumber({ number: statistics_count }, 4000);
					}				
				});
			});
		}
		
		/* - Venu Section 2 */
		if($(".venu-section-2").length){
			venu_img();
		}
		
		/* - Event List */
		if($(".event-section2").length){
			event_list();
			event_img_block();
		}
		
		/* - Gallery Section */
		gallery();
		if($(".gallery-list").length){
			var url;
			$(".gallery-list .gallery-box").magnificPopup({
				delegate: "a.zoom",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - Client Carousel */
		if( $(".clients-carousel").length ) {
			$(".clients-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					500:{
						items: 2
					},
					600:{
						items: 3
					},
					1000:{
						items: 5
					}
				}
			});
		}
		
		/* - Video Section */
		$(".video-section a").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		
		/* - Event Map */
		if($("#map-canvas-event-single").length==1){
			initialize("map-canvas-event-single");
		}
		
		/* - Blog */		
		$('#calendar').datepicker({
			inline: true,
			firstDay: 1,
			showOtherMonths: true,
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		});
		
		/* - Contact Map */
		if($("#map-canvas-contact").length==1){
			initialize("map-canvas-contact");
		}
		
		/* - Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					return false;
				}
			});
			return false;
		});/* Quick Contact Form /- */
		
	});	/* -- Document Ready /- */

	/* ## Event - Window Scroll */
	$( window ).on("scroll",function() {
		/* - Set Sticky Menu */
		if( $(".header-section .menu-block").length ) {
			sticky_menu();
		}
	});
	
	/* ## Event - Window Resize */
	$( window ).on("resize",function() {
		/* - History Section */
		history_img();
		
		cnt_box_height();
		
		/* - Venu Section 2 */
		venu_img();
		
		panel_resize();
		
		/* - Event List */
		event_list();
		event_img_block();
	});
	
	/* ## Window Load - Handler for load() called */
	$(window).on("load",function() {
		/* -- Site Loader */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		
		/* - Gallery Section */
		gallery();
		
		cnt_box_height();
	});

})(jQuery);