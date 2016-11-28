// DOM Ready

define(['jquery', 'isotope', 'easing', 'bootstrap', 'swipeBox'], function($, easing, bootstrap, swipeBox) {

    'use strict';

    var app = {

            // Runtime functions to initialise
            run: function() {

                this.isotope();
                this.swipebox();

            },

            //Isotope
            isotope: function() {
                var size = 1;
                var button = 1;
                var button_class = "gallery-header-center-right-links-current";
                var normal_size_class = "gallery-content-center-normal";
                var full_size_class = "gallery-content-center-full";
                var $container = $('#gallery-content-center');

                $container.isotope({
                    itemSelector: 'img'
                });

                // $('#gallery-header-center-right').affix({
                //     offset: {
                //         top: $('header').height()
                //     }
                // });


                function check_button() {
                    $('.gallery-header-center-right-links').removeClass(button_class);
                    if (button == 1) {
                        $("#filter-all").addClass(button_class);
                        $("#gallery-header-center-left-title").html('All Wedding Photos');
                    }
                    if (button == 2) {
                        $("#filter-getting-ready").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Getting Ready');
                    }
                    if (button == 3) {
                        $("#filter-arrival").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Arrival');
                    }
                    if (button == 4) {
                        $("#filter-ceremony").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Ceremony');
                    }
                    if (button == 5) {
                        $("#filter-reception").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Reception');
                    }
                    if (button == 6) {
                        $("#filter-portraits").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Portraits');
                    }
                    if (button == 7) {
                        $("#filter-speeches").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Speeches');
                    }
                    if (button == 8) {
                        $("#filter-sunset").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Sunset');
                    }
                    if (button == 9) {
                        $("#filter-entertainment").addClass(button_class);
                        $("#gallery-header-center-left-title").html('Entertainment');
                    }
                }

                function check_size() {
                    $("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
                    if (size == 0) {
                        $("#gallery-content-center").addClass(normal_size_class);
                        $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
                    }
                    if (size == 1) {
                        $("#gallery-content-center").addClass(full_size_class);
                        $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
                    }
                    $container.isotope({
                        itemSelector: 'img'
                    });
                }



                $("#filter-all").click(function() {
                    $container.isotope({
                        filter: '.all'
                    });
                    button = 1;
                    check_button();
                });
                $("#filter-getting-ready").click(function() {
                    $container.isotope({
                        filter: '.getting-ready'
                    });
                    button = 2;
                    check_button();
                });
                $("#filter-arrival").click(function() {
                    $container.isotope({
                        filter: '.arrival'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-ceremony").click(function() {
                    $container.isotope({
                        filter: '.ceremony'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-reception").click(function() {
                    $container.isotope({
                        filter: '.reception'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-portraits").click(function() {
                    $container.isotope({
                        filter: '.portraits'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-speeches").click(function() {
                    $container.isotope({
                        filter: '.speeches'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-sunset").click(function() {
                    $container.isotope({
                        filter: '.sunset'
                    });
                    button = 3;
                    check_button();
                });
                $("#filter-entertainment").click(function() {
                    $container.isotope({
                        filter: '.entertainment'
                    });
                    button = 3;
                    check_button();
                });
                $("#gallery-header-center-left-icon").click(function() {
                    if (size == 0) {
                        size = 1;
                    } else if (size == 1) {
                        size = 0;
                    }
                    check_size();
                });


                check_button();
                check_size();
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