<section id="locations" class="locations__section image-bg-fluid-height">
</section>
<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <h2>Locations</h2>
                <p> Please see the Google maps below showing the locations for both the church and our reception venue. If have any questions please email or call us.</p>
            </div>
            <div class="col-sm-4">
                <h2>Contact Us</h2>
                <address>
                    <abbr title="Phone">P:</abbr> (07525) 851-267
                    <br>
                    <abbr title="Email">E:</abbr> <a href="mailto:#">info@louise-justin.com</a>
                </address>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div id="map" class="img-responsive img-center" alt=""></div>
                <h2>St. Mary's Church</h2>
                <address>
                    <strong>Church Road</strong>
                    <br>Long Ditton, Surrey KT6 5HH
                    <br>
                </address>
            </div>
            <div class="col-sm-6">
                <div id="map2" class="img-responsive img-center" alt=""></div>
                <h2>Gorse Hill Hotel</h2>
                <address>
                    <strong>Hook Heath Road</strong>                    
                    <br>Woking, Surrey GU22 0QF
                    <br>
                </address>
            </div>
        </div>
    </div>
</section>
<script>
  function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.3803589, lng: -0.3155662},
        zoom: 16
    });
    var mapDiv2 = document.getElementById('map2');
    var map2 = new google.maps.Map(mapDiv2, {
        center: {lat: 51.3009872, lng: -0.5970133},
        zoom: 17
    });
  }
</script>
<!-- Replace the value of the key parameter with your own API key. -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGgIcOb2wAGk2eY7HaFUeCTRoUAFcV7BM&callback=initMap" async defer></script>