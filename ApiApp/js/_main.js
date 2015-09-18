

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
    function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
        });
    }
    
	// function initialize() {
	// 	var mapProp = {
	// 		center: new google.maps.LatLng(39.9472163,-75.1681698),
	// 		zoom:11,
	// 		mapTypeId:google.maps.MapTypeId.HYBRID
	// 	};
		
	// 	var map=new google.maps.Map(document.getElementById("map"),mapProp);
	// 	}
	// 	google.maps.event.addDomListener(window, 'load', initialize());
 //    }
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
 
} )( jQuery );