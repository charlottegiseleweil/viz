//Mini Map
var tileUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
var mb = new L.TileLayer(tileUrl, {minZoom: 0, maxZoom: 14});
var miniMap = new L.Control.MiniMap(mb, { toggleDisplay: true }).addTo(mymap); 