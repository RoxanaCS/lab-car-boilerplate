//Mapa de googlemaps
myMap()
function myMap() {
var mapOptions = {
   center: new google.maps.LatLng(-10, -76),
   zoom: 2,
   mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
