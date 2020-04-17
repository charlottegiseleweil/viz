//Base Map
var mymap = L.map('mapid').setView([16.872890378907783, -88.87390136718749], 10);

var baseMapOne = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri'
});
baseMapOne.addTo(mymap);


var baseMapTwo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri '
});


//Mini Map
		//mini map 1
		var osmUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
		var osmAttrib='Tiles &copy; Esri';
		var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});


		var osm1 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
		var miniMap = new L.Control.MiniMap(osm1, { toggleDisplay: true, position:'topleft' });
		//miniMap.addTo(mymap);



//Map and Satellite Toggle

miniMap.addTo(mymap);

//display on load event
$(document).ready(function(){
	$("#mapRadio").prop("checked", true);
			miniMap.addTo(mymap);
	});

document.getElementById("mapRadio").onclick = function(){
	if (this.checked){
		mymap.removeLayer(baseMapTwo);
		baseMapOne.addTo(mymap);

	}
}

document.getElementById("satelliteRadio").onclick = function(){
	if (this.checked){
		mymap.removeLayer(baseMapOne);
		baseMapTwo.addTo(mymap);
	}
}


