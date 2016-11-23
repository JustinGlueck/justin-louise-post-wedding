require.config({
    paths: {
        jquery: '../components/jquery/dist/jquery.min',
        bootstrap: '../components/bootstrap/dist/js/bootstrap.min',
        easing: '../components/jquery.easing/js/jquery.easing.min',
        domReady: '../components/domReady/domReady',
        swipeBox: '../components/swipebox/js/jquery.swipebox',
        scrollingNav: '../modules/scrolling-nav/scrolling-nav',
        fullSlider: '../modules/full-slider/full-slider',
        ourStory: '../modules/our-story/our-story',
        weddingPhotos: '../modules/wedding-photos/wedding-photos'
    },
    shim: {
        "bootstrap": ["jquery"],
        "easing": ["jquery"],
        "swipeBox": ["jquery"],
        "fullSlider": ["jquery"]
    }
});

require(['domReady', 'swipeBox', 'scrollingNav', 'fullSlider', 'ourStory', 'weddingPhotos'], function(domReady, swipeBox, scrollingNav, fullSlider, ourStory, weddingPhotos) {
    domReady(function() {
        scrollingNav.init();
        fullSlider.init();
        ourStory.init();
        weddingPhotos.init();
    });
});
// DOM Ready

define(['jquery', 'easing', 'bootstrap'], function($, easing, bootstrap) {

    'use strict';

    var app = {

            // Runtime functions to initialise
            run: function() {

                this.carousel();

            },

            //jQuery to collapse the navbar on scroll
            carousel: function() {

                $('#home').carousel({
                    interval: false //changes the speed
                });
                console.log("Carousel running.");

            },

        },

        // App ready
        ready = function() {
            app.run();
        };

    return {

        init: ready

    };

});
// DOM Ready

define(['jquery', 'easing', 'bootstrap'], function($, easing, bootstrap) {

'use strict';

var app = {

        // Runtime functions to initialise
        run : function() {

            this.age();
        	console.log('age: ' + this.age("2008/08/10"));
        },
        
        //jQuery to collapse the navbar on scroll
        age: function(dateString) {
		    var today = new Date();
		    var birthDate = new Date(dateString);
		    var age = today.getFullYear() - birthDate.getFullYear();
		    var m = today.getMonth() - birthDate.getMonth();
		    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		        age--;
			}
		
		console.log("Age running.");

		return age;

        },
        
    },
    
    // App ready
    ready = function () {
        app.run();
    };

    return {

        init: ready

    };

});
// DOM Ready

define(['jquery', 'easing'], function($, easing) {

'use strict';

var app = {

        // Runtime functions to initialise
        run : function() {

                    this.navbar();
                    this.scroller();
        
        },
        
        //jQuery to collapse the navbar on scroll
        navbar: function() {
            
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
        },
        
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        scroller: function() {

            $(function() {
                $('a.page-scroll').bind('click', function(event) {
                    var $anchor = $(this);
                    $('#home').carousel('pause');
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    $('#home').carousel('cycle');
                    event.preventDefault();
                    });
            });

        },
        
        
    },
    
    // App ready
    ready = function () {
        app.run();
    };

    return {

        init: ready

    };

});
// DOM Ready

define(['jquery', 'easing', 'bootstrap', 'swipeBox'], function($, easing, bootstrap, swipeBox) {

    'use strict';

    var app = {

            // Runtime functions to initialise
            run: function() {

                this.swipebox();

            },

            //swipeBox photos
            swipebox: function() {

                $('.swipebox').swipebox();

                console.log("Swipebox running.");

            }

        },

        // App ready
        ready = function() {
            app.run();
        };

    return {

        init: ready

    };

});