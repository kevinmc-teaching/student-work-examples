/* Custom Front-End jQuery scripts */
jQuery(document).ready(function($) {

	"use strict";
			

	/* Sidebar in Mobile View */
	var sidebar = $('#pageslide');
	// $('.main-menu, #masthead:not(.hide-strip) .secondary-menu').children().clone().removeAttr('id').appendTo($(sidebar));
	// $(sidebar).children().nextUntil().wrap('<div class="block" />');
	
	if ($(window).width() < 768) {
        $('.owl-carousel').owlCarousel({
            // nav:true,
            items:1,
            loop:true,
            autoplay:true
            // navText: ["&#xf100","&#xf101"],
            // slideBy:3
        });
      }
     else if($(window).width() < 992){
        $('.owl-carousel').owlCarousel({
            // nav:true,
            items:2,
            loop:true,
            autoplay:true
            // navText: ["&#xf100","&#xf101"],
            // slideBy:4
        });
     }

    $(".owl-carousel").owlCarousel({
		items:3,
		loop:true,
        autoplay:true
	});

	$('#open-pageslide').click(function(event) {
		event.preventDefault();
		$('body').toggleClass('st-menu-open');
	});
	
	$('#close-pageslide').click(function(event) {
		event.preventDefault();
		$('body').removeClass('st-menu-open');
	});

    
	if ($().flexslider){
		// Widget sliders
		$('.widget .flexslider').flexslider({
			useCSS: false,
			animation: 'slide',
			controlNav: false,
			smoothHeight: true,
			allowOneSlide: true,
			nextText: '<i class="icomoon-chevron-right"></i>',
			prevText: '<i class="icomoon-chevron-left"></i>'
		});
		
		// Home page & Category sliders
		$('.posts-slider').flexslider({
			useCSS: false,
			animation: 'slide',
			controlNav: false,
			smoothHeight: true,
			allowOneSlide: true,
			nextText: '<i class="icomoon-chevron-right"></i>',
			prevText: '<i class="icomoon-chevron-left"></i>',
			start: function(slider) {
				$('.posts-slider').removeClass('loading');
			}
		});
	}



	/* Post Format gallery carousel */
	if ($('#gallery-carousel')[0]) {

		var gallery = $('#gallery-carousel .carousel');
		
		enquire.register("screen and (min-width:751px)", function() {
			gallery.carouFredSel({
				width:'100%',
				align:false,
				auto:false,
				scroll:{
					items:1
				},
				items:{
					visible:1
				},
				prev:'#gallery-carousel .prev',
				next:'#gallery-carousel .next',
				swipe:{
					onTouch:true
				}
			});
			
		});
		
		enquire.register("screen and (max-width:750px)", function() {
			gallery.carouFredSel({
				responsive:true,
				items:{
					visible:{
						max:1
					}
				},
				align:'center',
				auto:false,
				prev:'#gallery-carousel .prev',
				next:'#gallery-carousel .next',
				swipe:{
					onTouch:true
				}
			});
			
		});

	}

	
	


});// - document ready