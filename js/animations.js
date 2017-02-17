// set equal heights to all divs in row
$(function() {
    $('.fadeCard').matchHeight();
});

$(function() {
    $('.demoCard').matchHeight();
});

$(function() {
    $('.cloudCard').matchHeight();
});

$(function() {
    $('.contactCard').matchHeight();
});

$(function() {
    $('.introCard').matchHeight();
});

// toggle class of statNav
$(".loenzEye").on("click", function(){
  $("#statNav").toggleClass("clicked unClicked");
});

// makes googe maps work
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(52.3530404,4.8353246,21);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 12,
            panControl: true,
            scrollwheel: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'favicon.ico';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<p><strong>LOENZ</strong></p>' +
                '<div class="info-content">' +
                '<p>Wittgensteinlaan 145, 1062 KD Amsterdam</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);
});
