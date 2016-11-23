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