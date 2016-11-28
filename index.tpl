<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Louise and Justin's Wedding Website</title>
    <!-- <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
    <!-- Custom CSS -->    
    <link href="app/build/css/main.css" rel="stylesheet">
    <link href="app/build/css/vendor.css" rel="stylesheet">
    <link href="app/components/gallery/animated-masonry-gallery.css" rel="stylesheet" type="text/css" />
<!--     <script type="text/javascript" src="app/components/gallery/jquery-2.0.2.min.js"></script>
    <script type="text/javascript" src="app/components/gallery/jquery-ui-1.10.4.min.js"></script>
    <script type="text/javascript" src="app/components/gallery/jquery.isotope.min.js"></script> -->
<!--     <script type="text/javascript" src="app/components/gallery/animated-masonry-gallery.js"></script> -->
    <!-- <script type="text/javascript" src="app/components/bootstrap/dist/js/bootstrap.min.js"></script> -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Plugin CSS -->
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    
{% block content %}

<!-- Navigation -->
{% include "app/modules/navigation/navigation.tpl" %}

<!-- Home -->
{% include "app/modules/home/home.tpl" %}

<!-- Our Story -->
{% include "app/modules/our-story/our-story.tpl" %}

<!-- The Proposal -->
{% include "app/modules/wedding-films/wedding-films.tpl" %}

<!-- Photos -->
{% include "app/modules/wedding-photos/wedding-photos.tpl" %}

<!-- The Wedding -->
{% include "app/modules/photobooth/photobooth.tpl" %}

<!-- Gift Service -->
{% include "app/modules/honeymoon/honeymoon.tpl" %}

<!-- RSVP -->
<!-- {% include "app/modules/locations/locations.tpl" %} -->

{% endblock %}

<script type="text/javascript" id="app" src="app/components/requirejs/require.js" data-main="app/modules/main.js"></script>

</body>

</html>