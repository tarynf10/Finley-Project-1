
(function(){
var map = L.map('map').setView([40.806290, -73.963005], 16);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18
}).addTo(map);

var marker = L.marker([40.8075, -73.9633]).addTo(map);

var circle = L.circle([40.8075, -73.9633], 500, {
    color: 'magenta',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [40.809, -72.98],
    [40.803, -72.96],
    [40.81, -72.947]
]).addTo(map);

marker.bindPopup("<b>Columbia Graduate School of Journalism</b><br>Emancipation: May 20th, 2015").openPopup();
circle.bindPopup("Morningside Heights");
polygon.bindPopup(".");


}).call(this);