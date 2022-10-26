

$(document).ready(function(){

	 /* FOR THE STICKY NAVIGATION */

	$('.js--section-resume').waypoint(function(direction){

		if(direction == "down"){
			$('nav').addClass('sticky');

		}else{
			$('nav').removeClass('sticky');
		}
	},{
		offset: '80px;'
	});

	// SCROLL ON BUTTONS //

	$('.js--scroll-to-resume').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-resume').offset().top}, 1000);
	});


	// NAVIGATION SCROLL //

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});




});