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