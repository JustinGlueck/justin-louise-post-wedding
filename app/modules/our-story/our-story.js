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