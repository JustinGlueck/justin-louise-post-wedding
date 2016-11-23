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