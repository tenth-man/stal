

let main = document.querySelector('#main-box');
main.style.height = `${document.documentElement.clientHeight}px`;

// Where you want to render the map.
// var osmMap = document.getElementById('osm-map');

// // Height has to be set. You can do this in CSS too.
// osmMap.style.height = '100%';
// osmMap.style.width = '100%';

// // Create Leaflet map on map element.
// var map = L.map(osmMap);

// // Add OSM tile layer to the Leaflet map.
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Target's GPS coordinates.
// var target = L.latLng('61.778277', '34.350320');

// // Set map's center to target with zoom 14.
// map.setView(target, 14);

// // Place a marker on the same location.
// L.marker(target).addTo(map);

// document.addEventListener('click', function (event) {

// 	// Игнорируем клики, которые не относятся к нашей кнопке
// 	if (!event.target.hasAttribute('data-fullscreen')) return;

// 	// Если уже в полном, выйти
// 	// Иначе, снова открыть полный экран
// 	if (document.fullscreenElement) {
// 		document.exitFullscreen();
// 	} else {
// 		document.documentElement.requestFullscreen();
// 	}

// }, false);