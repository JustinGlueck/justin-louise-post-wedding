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