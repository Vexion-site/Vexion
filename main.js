console.log("LOADED");

let map = L.map('mapid').setView([45,20],13);

let Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   subdomains: 'abcd',
   minZoom: 0,
   maxZoom: 20,
   ext: 'png'
});
map.addLayer(Stamen_Toner);

let marker = L.marker([45, 20]);
marker.addTo(map);