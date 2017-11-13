(function($) {
    "use strict";


    // hero slider active
    $('.hero-sliders').owlCarousel({
	    loop:true,
	    items:1,
	    nav:true,	    
	    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    dots:false,
	    autoplay:true,
	    autoplayTimeout:6000,
	    smartSpeed:800,
	    animateOut: 'fadeOut'
	})
    


})(jQuery);