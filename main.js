console.log("LOADED");

let map = L.map('mapid').setView([44.799722,20.405278],13);

let Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   subdomains: 'abcd',
   minZoom: 0,
   maxZoom: 20,
   ext: 'png'
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
// map.addLayer(Stamen_Toner);


let marker = L.marker([44.799722,20.405278], {title: 'VEXION LOCATION'});
marker.bindPopup("<span clas=\"map-popup\">&#9762; vexion</span>");
marker.addTo(map);

let auxmarker = L.marker([44.804722,20.404167], {color:"cyan"});
auxmarker.bindPopup("<span clas=\"map-popup\">&#9762; vexion</span>");
auxmarker.addTo(map);