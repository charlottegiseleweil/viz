//Layer Styling - these are independent, need separate styling for layers
	var currentAgStyle = {
		"color": "#F7B733",
		"fillOpacity":0.9,
		"weight": 0.5,
	};

	var roadStyle = {
		"color": "#8B0000"

	};

	var allRoadsStyle = {
		"color": "#cd7f32",
		"weight": 1,
	};

	var myStyle2 = {
		"color": "green"
	}

	var CMCCGeographicZoneStyle = {
		"color": "#FC4A1A",
		"stroke-width": 2,
		"fillOpacity":0,
	}

	var currentTimberStyle = {
		"color": "#654321",
		"fillOpacity":0.7,
		"stroke": "#180606",
		"stroke-width": 1,
	}

	var waterwaysStyle = {
		"color": "#4169E1",
		"fillOpacity":0.8,
		"weight": 0.5,		
	}

//Icon Declarations 
	var hotelLodgingIcon = L.icon({
    iconUrl: 'img/bed.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var tourismSitesIcon = L.icon({
    iconUrl: 'img/leaf.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var culturalSitesIcon = L.icon({
    iconUrl: 'img/chichen-itza-pyramid.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var currentMiningIcon = L.icon({
    iconUrl: 'img/pickaxe.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});



	var solarGoodIcon = L.icon({
    iconUrl: 'img/solar-panel-2.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var solarBestIcon = L.icon({
    iconUrl: 'img/solar-panel.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});


	var windGoodIcon = L.icon({
    iconUrl: 'img/wind-2.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var windBestIcon = L.icon({
    iconUrl: 'img/wind.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var tourismSitesIcon = L.icon({
    iconUrl: 'img/leaf.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var cmccCommunityIcon = L.icon({
    iconUrl: 'img/home-run.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var damsIcon = L.icon({
    iconUrl: 'img/dam.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

//Popup On Mouse Over

 function popUpOnMouseHover(feature, layer){ //isolate this function out
			layer.on('mouseover', function (e) {
            	this.openPopup();
        	});
       		layer.on('mouseout', function (e) {
            	this.closePopup();
        	});
		}

//Open Link for infoLink
function openLinkOnClick(feature, layer){
	layer.on('click', function (e) {
		var link = feature.properties.infoLink;
		window.open(link);
	})
}

function openPhotoOnClick(feature, layer){
	layer.on('click', function(e){
		var photosphere = feature.properties.photosphereLink;
		window.open(photosphere);
	})
}


//PopUp Content

function popUpCulturalSites(feature, layer){
	layer.bindPopup("<h6>Cultural Sites</h6>" + feature.properties.Attraction + "<br>" + "<img src='img/culturalSites.png' width='200'>" + "<br>" + "<h6>Click icon for more info</h6>");
	popUpOnMouseHover(feature, layer);
	openPhotoOnClick(feature, layer);
}
function popUpNatureSites(feature, layer){
	layer.bindPopup("<h6>Nature Sites</h6>" + feature.properties.Name + "<br>" + "<img src='img/natureSites.png' width='200' >" + "<br>" + "<h6>Click icon for more info</h6>");
	popUpOnMouseHover(feature, layer);
	openPhotoOnClick(feature, layer);
}
function popUpCMCCCommunities(feature, layer){
	layer.bindPopup("<h6>CMCC Communities</h6>" + feature.properties.SETTNAME + " | Population: " + feature.properties.POPULATION);
	popUpOnMouseHover(feature, layer);
}
function popUpHotelSites(feature, layer){
	layer.bindPopup("<h6>Hotel/Lodging</h6>" + feature.properties.Name + "<br>" + "<img src='img/lodging.png' width='120'>");
	popUpOnMouseHover(feature, layer);
}
function popUpSolarEnergy(feature, layer){
	layer.bindPopup("<h5>Ideal Sites for Solar Farms</h5>" + "<br>" + "<h6>The terrain in the region and the amount of solar energy hitting the surface were examined to determine suitability of this site.</h6>" + "<br>" + "Solar Irradiance: " + feature.properties.PV_out + " kWh/m2" + "<br>" + "<h6>Click icon for info</h6>");
	popUpOnMouseHover(feature, layer);
}
function popUpSolarEnergyGood(feature, layer){
	layer.bindPopup("<h5>Suitable Sites for Solar Farms</h5>" + "<br>" + "<h6>The terrain in the region and the amount of solar energy hitting the surface were examined to determine suitability of this site.</h6>" + "<br>" + "Solar Irradiance: " + feature.properties.PV_out + " kWh/m2" + "<br>" + "<h6>Click icon for info</h6>");
	popUpOnMouseHover(feature, layer);
}
function popUpWindEnergy(feature, layer){
	layer.bindPopup("<h5>Ideal Sites for Wind Farms</h5>" + "<br>" + "<h6>The terrain in the region and the speed of the wind in the region were examined to determine suitability of this site.</h6>" + "<br>" + "Average wind speed: " + feature.properties.v_avg_disp  + " m/s" + "<br>" + "<h6>Click icon for info</h6>")
	popUpOnMouseHover(feature, layer);
}
function popUpWindEnergyGood(feature, layer){
	layer.bindPopup("<h5>Suitable Sites for Wind Farms</h5>" + "<br>" + "<h6>The terrain in the region and the speed of the wind in the region were examined to determine suitability of this site.</h6>" + "<br>" + "Average wind speed: " + feature.properties.v_avg_disp  + " m/s" + "<br>" + "<h6>Click icon for info</h6>")
	popUpOnMouseHover(feature, layer);
}
function popUpSingleMining(feature, layer){
	layer.bindPopup("Click on marker for more information");
	popUpOnMouseHover(feature, layer);
}

function popUpDams(feature, layer){
	var linkName = String(feature.properties.infoLink);
	damsContent = feature.properties.descript  + "<br>" + "<img src='img/damsImage.jpg' width='120'>" + "<br>" + "<h6>Click icon for info</h6>";
	layer.bindPopup(damsContent);//.className(damsPopupStyling);
	popUpOnMouseHover(feature, layer);
	openLinkOnClick(feature, layer);

}

function popUpBullRidge(feature, layer){
	layer.bindPopup("<h6>Timber Concessions</h6>" + "<br>" + "Bull Ridge Compartment Boundry" + "<br>" + "<img src='img/timberCurrentPopupImage.jpg' width='120'>");
	popUpOnMouseHover(feature, layer);
}

function popUpfd(feature, layer){
	layer.bindPopup("<h6>Timber Concessions</h6>" + "<br>" + "FD Portion MPR" + "<br>" + "<img src='img/timberCurrentPopupImage.jpg' width='120'>");
	popUpOnMouseHover(feature, layer);
}

function popUpRecinos(feature, layer){
	layer.bindPopup("<h6>Timber Concessions</h6>" + "<br>" + "Recinos Management Area" + "<br>" + "<img src='img/timberCurrentPopupImage.jpg' width='120'>");
	popUpOnMouseHover(feature, layer);
}

function popUpplc(feature, layer){
	layer.bindPopup("<h6>Timber Concessions</h6>" + "<br>" + "PLC Area" + "<br>" + "<img src='img/timberCurrentPopupImage.jpg' width='120'>");
	popUpOnMouseHover(feature, layer);
}

//Popup Links - layer groups only
//function damsLinkClick(){
//	window.open('https://en.wikipedia.org/wiki/Chalillo_Dam');
//}

function energyLinkClick(){
	window.open('data/dataInfoDocuments/renewablesOnePager.pdf');
}

function hotelLinkClick() {
	window.open('https://www.belizehotels.org/interactive-map/');
}

//Layer Data Load In
	var newRoad = new L.Shapefile("data/newRoad.zip", {style: roadStyle});

	var agZones = new L.Shapefile("data/ag_defined_v1.zip", {style: currentAgStyle});


	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip", {style: waterwaysStyle});
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip", {style: waterwaysStyle});
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip", {style: waterwaysStyle});

	var water = L.layerGroup([waterWays, waterBody, majorRivers]);

	var hotelLodging = L.geoJSON.ajax("data/tourismData/hotelsSitesTourism.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, hotelLodgingIcon)}, 
		onEachFeature:popUpHotelSites}).on('click', hotelLinkClick);
	var tourismSites = L.geoJSON.ajax("data/tourismData/tourismSitesInfo.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, tourismSitesIcon)}, 
		onEachFeature: popUpNatureSites});
	var culturalSites = L.geoJSON.ajax("data/tourismData/culturalSitesTourismInfo.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, culturalSitesIcon)}, 
		onEachFeature: popUpCulturalSites}); 

	var allTourism = L.layerGroup([hotelLodging, tourismSites, culturalSites]);

	var cmccCommunities = new L.geoJSON.ajax("data/cmccCommunititesGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, cmccCommunityIcon)}, 
		onEachFeature: popUpCMCCCommunities});

	var cmccGeographicZone = new L.geoJSON.ajax("data/cmccGeographyCleaned.geojson", {style:CMCCGeographicZoneStyle });

	var bullRidgeCompartmentBoundry = new L.geoJSON.ajax("data/timberConcessions/bullRidgeCompartmentBoundryGJ.geojson", {style: currentTimberStyle, onEachFeature: popUpBullRidge});
	var CFR = new L.Shapefile("data/timberConcessions/CFR.zip", {style: currentTimberStyle});
	var fdPortionMPR = new L.geoJSON.ajax("data/timberConcessions/fdPortionMPR.geojson", {style: currentTimberStyle, onEachFeature: popUpfd});
	var plcArea = new L.geoJSON.ajax("data/timberConcessions/plcArea.geojson", {style: currentTimberStyle, onEachFeature: popUpplc});
	var recinosMngtArea = new L.geoJSON.ajax("data/timberConcessions/recinosMngtArea.geojson", {style: currentTimberStyle, onEachFeature: popUpRecinos});

	var solarGood = new L.geoJSON.ajax("data/energy/solarGoodGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, solarGoodIcon)}, 
		onEachFeature: popUpSolarEnergyGood}).on('click', energyLinkClick);
	var solarBest = new L.geoJSON.ajax("data/energy/solarBestGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, solarBestIcon)}, 
		onEachFeature: popUpSolarEnergy}).on('click', energyLinkClick);
	var windGood = new L.geoJSON.ajax("data/energy/windGoodDisp.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, windGoodIcon)}, 
		onEachFeature:popUpWindEnergyGood}).on('click', energyLinkClick);
	var windBest = new L.geoJSON.ajax("data/energy/windBestDisp.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, windBestIcon)}, 
		onEachFeature:popUpWindEnergy}).on('click', energyLinkClick);
	var energySites = L.layerGroup([solarGood, solarBest, windGood, windBest]);

	var dams = new L.geoJSON.ajax("data/energy/damsFullInfoLink.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, damsIcon)}, 
		onEachFeature:popUpDams})/*.on('click', damsLinkClick)*/;

	var allRoads = new L.Shapefile("data/allRoads.zip", {style: allRoadsStyle});

	var currentMining = new L.geoJSON.ajax("data/miningRegionsGJ.geojson", {pointToLayer:returncurrentMiningMarker});
	var miningSingle = L.marker([16.51408574, -89.12677427], {icon: currentMiningIcon}).bindTooltip("Click icon for more information").on('click', miningMarkerClick);

	var allEnergy = L.layerGroup([solarBest, solarGood, windBest, windGood, dams]);

	var agZone = L.layerGroup([agZones]);
		cmccZone = L.layerGroup([cmccGeographicZone]);
		timberConcessions = L.layerGroup([bullRidgeCompartmentBoundry, fdPortionMPR, plcArea, recinosMngtArea]);



//Layer Toggling
	//half function set up
function toggleOn(layer, elementIL) { // this one works well above too
	layer.addTo(mymap);
	x = document.getElementById(elementIL);
	x.className = "ILImage";
}

function toggleOff(layer, elementIL) {
	mymap.removeLayer(layer); //toggle off()
	x = document.getElementById(elementIL);
	x.className = "close";
}

//LayerLegendToggleFunction
function layerLegendToggle(layer, elementIL, checkBox) {
	var checkbox = document.getElementById(checkBox);
	if (checkbox.checked == true){
		toggleOn(layer, elementIL);
	} else{
		toggleOff(layer, elementIL);
	}
}




newRoadIL = "newRoadIL"
//display on load event
$(document).ready(function(){
	$("#newRoadCheckBox").prop("checked", true);
			newRoad.addTo(mymap);
			x = document.getElementById(newRoadIL); //need onload setting, but not quite working
			x.className = "ILImage";
	});


document.getElementById("newRoadCheckBox").onclick = function(){
	if (this.checked){
		toggleOn(newRoad, newRoadIL);
	} else {
		toggleOff(newRoad, newRoadIL);
	}
}	


	tourismArchKeyIL = "tourismArckKeyIL"
	tourismArchKeyCheck = "tourismArchKeyCheckBox"
	document.getElementById("tourismArchKeyCheckBox").onclick = function(){
		layerLegendToggle(allTourism, tourismArchKeyIL, tourismArchKeyCheck);

	}	

	impactedTourismIL = "impactedTourismIL"
	tourismImpactedCheck = "tourismImpactedCheckBox"
	document.getElementById("tourismImpactedCheckBox").onclick = function(){
		layerLegendToggle(newRoad, impactedTourismIL, tourismImpactedCheck);
	}	

	tourismExpansionIL = "tourismExpansionIL"
	tourismExpandedCheck = "tourismExpandedCheckBox"
	document.getElementById("tourismExpandedCheckBox").onclick = function(){
		layerLegendToggle(newRoad, tourismExpansionIL, tourismExpandedCheck);
	}			

	//keep this one
	currentMiningIL = "currentMiningIL"
	document.getElementById("miningCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(miningSingle, currentMiningIL);
		} else {
			toggleOff(miningSingle, currentMiningIL);
			mymap.removeLayer(currentMining);
		}
	}	

	function miningMarkerClick(){
		currentMining.addTo(mymap);
	}


	miningExpansionIL = "miningExpansionIL"
	miningExpansionCheck = "miningExpansionCheckBox"
	document.getElementById("miningExpansionCheckBox").onclick = function(){
		layerLegendToggle(newRoad, miningExpansionIL, miningExpansionCheck);
	}			


	currentAgricultureIL = "currentAgricultureIL"
	currentAgricultureCheck = "currentAgricultureCheckBox"
	document.getElementById("currentAgricultureCheckBox").onclick = function(){
		layerLegendToggle(agZones, currentAgricultureIL, currentAgricultureCheck);
	}	

	agExpansionIL = "agExpansionIL"
	agExpansionCheck = "agExpansionCheckBox"
	document.getElementById("agExpansionCheckBox").onclick = function(){
		layerLegendToggle(newRoad, agExpansionIL, agExpansionCheck);
	}	



	currentTimberIL = "currentTimberIL"
	timberCheck = "timberCheckBox"
	document.getElementById("timberCheckBox").onclick = function(){
		layerLegendToggle(timberConcessions, currentTimberIL, timberCheck);
	}	

	timberExpansionIL = "timberExpansionIL"
	timberExpansionCheck = "timberExpansionCheckBox"
	document.getElementById("timberExpansionCheckBox").onclick = function(){
		layerLegendToggle(newRoad, timberExpansionIL, timberExpansionCheck);
	}	


	energyIL = "energyIL"
	energyCheck = "energyCheckBox"
	document.getElementById("energyCheckBox").onclick = function(){
		layerLegendToggle(dams, energyIL, energyCheck);
	}	

	potentialEnergyIL = "potentialEnergyIL"
	energySitesCheck = "energySitesCheckBox"
	document.getElementById("energySitesCheckBox").onclick = function(){
		layerLegendToggle(energySites, potentialEnergyIL, energySitesCheck);
	}			

	watershedsIL = "watershedsIL"
	watershedsCheck = "watershedsCheckBox"
	document.getElementById("watershedsCheckBox").onclick = function(){
		layerLegendToggle(water, watershedsIL, watershedsCheck);
	}	

	CMCCAreasIL = "CMCCAreasIL"
	CMCCAreasCheck = "CMCCAreasCheckBox"
	document.getElementById("CMCCAreasCheckBox").onclick = function(){
		layerLegendToggle(cmccGeographicZone, CMCCAreasIL, CMCCAreasCheck);
	}

	CMCCCommunitiesIL = "CMCCCommunitiesIL"
	CMCCCommunitiesCheck = "CMCCCommunitiesCheckBox"
	document.getElementById("CMCCCommunitiesCheckBox").onclick = function(){
		layerLegendToggle(cmccCommunities, CMCCCommunitiesIL, CMCCCommunitiesCheck);
	}	

	roadsIL = "roadsIL"
	roadsCheck = "roadsCheckBox"
	document.getElementById("roadsCheckBox").onclick = function(){
		layerLegendToggle(allRoads, roadsIL, roadsCheck);
	}	


//Icon setups 
function returnIconMarker (json, latlng, iconName){
	return L.marker(latlng, {
		icon: iconName
	});
}

function returncurrentMiningMarker(json, latlng){
	return L.marker(latlng, {
		icon: currentMiningIcon
	});
}

