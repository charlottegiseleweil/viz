//Layer Styling - these are independent, need separate styling for layers
	var currentAgStyle = {
		"color": "#F7B733",
		"fillOpacity":0.9,
		"weight": 0.5,
	};

	var roadStyle = {
		"color": "grey"

	};

	var allRoadsStyle = {
		"color": "#654321",
		"weight": 0.7,
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
		"color": "#013220",
		"fillOpacity":0.8,
		"weight": 0.5,		
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

//PopUp Content
// For images need to declare them as html elemenet then getElementById("ImageName"); ERASE LINE WHEN DONE

function popUpCulturalSites(feature, layer){
	layer.bindPopup("Attraction name: " + feature.properties.Attraction + "<img src='img/culturalSitesImage.jpg' width='70%''>");
	popUpOnMouseHover(feature, layer);
}
function popUpNatureSites(feature, layer){
	layer.bindPopup( "Attraction name: " + feature.properties.Name + "<img src='img/natureSite.png' width='70%''>");
	popUpOnMouseHover(feature, layer);
}
function popUpCMCCCommunities(feature, layer){
	layer.bindPopup(feature.properties.SETTNAME + " | Population: " + feature.properties.POPULATION);
	popUpOnMouseHover(feature, layer);
}
function popUpHotelSites(feature, layer){
	layer.bindPopup(feature.properties.Name + "<img src='img/lodging.png' width='70%''>");
	popUpOnMouseHover(feature, layer);
}
function popUpSolarEnergy(feature, layer){
	layer.bindPopup("Solar Irradiance: " + feature.properties.PV_out + " kWh/m2");
	popUpOnMouseHover(feature, layer);
}
function popUpWindEnergy(feature, layer){
	layer.bindPopup("Average wind speed: " + feature.properties.v_avg_disp  + " m/s")
	popUpOnMouseHover(feature, layer);
}
function popUpSingleMining(feature, layer){
	layer.bindPopup("Click on marker for more information");
	popUpOnMouseHover(feature, layer);
}

function popUpDams(feature, layer){
	var linkName = feature.properties.infoLink;
	layer.bindPopup("Name: " + feature.properties.descript  + "<img src='img/damsImage.jpg' width='70%''>" + "   | Additional Information: "  + linkName + "<a href='https://en.wikipedia.org/wiki/Chalillo_Dam'> Click for Info</a>");
	popUpOnMouseHover(feature, layer);
}


//Layer Data Load In
	var newRoad = new L.Shapefile("data/newRoad.zip", {style: roadStyle});

	var agZones = new L.Shapefile("data/ag_defined_v1.zip", {style: currentAgStyle});


	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip", {style: waterwaysStyle});
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip", {style: waterwaysStyle});
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip", {style: waterwaysStyle});
	//var waterLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
	//attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	//subdomains: 'abcd',
	//maxZoom: 19
//}); //practice label layer, erase comment when you find right raster layer
	var water = L.layerGroup([waterWays, waterBody, majorRivers]);

	var hotelLodging = L.geoJSON.ajax("data/hotelsSitesTourism.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, hotelLodgingIcon)}, 
		onEachFeature:popUpHotelSites});
	var tourismSites = L.geoJSON.ajax("data/tourismSites.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, tourismSitesIcon)}, 
		onEachFeature: popUpNatureSites});
	var culturalSites = L.geoJSON.ajax("data/culturalSitesTourism.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, culturalSitesIcon)}, 
		onEachFeature: popUpCulturalSites}); 

	var allTourism = L.layerGroup([hotelLodging, tourismSites, culturalSites]);

	var cmccCommunities = new L.geoJSON.ajax("data/cmccCommunititesGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, cmccCommunityIcon)}, 
		onEachFeature: popUpCMCCCommunities});

	var cmccGeographicZone = new L.geoJSON.ajax("data/cmccGeographyCleaned.geojson", {style:CMCCGeographicZoneStyle });

	var bullRidgeCompartmentBoundry = new L.Shapefile("data/timberConcessions/BullRidgeCompartmentBoundry.zip", {style: currentTimberStyle});
	var CFR = new L.Shapefile("data/timberConcessions/CFR.zip", {style: currentTimberStyle});
	var fdPortionMPR = new L.Shapefile("data/timberConcessions/FD_Portion_MPR.zip", {style: currentTimberStyle});
	var plcArea = new L.Shapefile("data/timberConcessions/PLCArea.zip", {style: currentTimberStyle});
	var recinosMngtArea = new L.Shapefile("data/timberConcessions/RecinosMngtArea.zip", {style: currentTimberStyle});

	var solarGood = new L.geoJSON.ajax("data/solarGoodGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, solarGoodIcon)}, 
		onEachFeature: popUpSolarEnergy});
	var solarBest = new L.geoJSON.ajax("data/solarBestGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, solarBestIcon)}, 
		onEachFeature: popUpSolarEnergy});
	var windGood = new L.geoJSON.ajax("data/windGoodDisp.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, windGoodIcon)}, 
		onEachFeature:popUpWindEnergy});
	var windBest = new L.geoJSON.ajax("data/windBestDisp.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, windBestIcon)}, 
		onEachFeature:popUpWindEnergy});
	var energySites = L.layerGroup([solarGood, solarBest, windGood, windBest]);

	var dams = new L.geoJSON.ajax("data/damsMoreInfoGJ.geojson", {
		pointToLayer: function (json, latlng, iconName) {return returnIconMarker(json, latlng, damsIcon)}, 
		onEachFeature:popUpDams});

	var allRoads = new L.Shapefile("data/allRoads.zip", {style: allRoadsStyle});

	var currentMining = new L.geoJSON.ajax("data/miningRegionsGJ.geojson", {pointToLayer:returncurrentMiningMarker});
	var miningSingle = L.marker([16.51408574, -89.12677427], {icon: currentMiningIcon}).bindTooltip("Click icon for more information").on('click', miningMarkerClick);

	var allEnergy = L.layerGroup([solarBest, solarGood, windBest, windGood, dams]);

	var agZone = L.layerGroup([agZones]);
		cmccZone = L.layerGroup([cmccGeographicZone]);
		timberConcessions = L.layerGroup([bullRidgeCompartmentBoundry, fdPortionMPR, plcArea, recinosMngtArea]);


//Additional Info Pop-ups

//Timber
bullRidgeCompartmentBoundry.bindPopup("<b>Bull Ridge Compartment Boundry</b>" + "<a href='https://en.wikipedia.org/wiki/Chalillo_Dam'> Click for Info</a>");
fdPortionMPR.bindPopup("<b>FD Portion MPR</b>");
plcArea.bindPopup("<b>PLC Area</b>");
recinosMngtArea.bindPopup("<b>Recinos Management Area</b>");




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

newRoadIL = "newRoadIL"
//display on load event
$(document).ready(function(){
	$("#newRoadCheckBox").prop("checked", true);
			newRoad.addTo(mymap);
			x = document.getElementById(newRoadIL); //need onload setting, but not quite working
			x.className = "ILImage";
	});


//document.getElementById("newRoadCheckBox").onclick = function(){
//	layerToggle();
//}

document.getElementById("newRoadCheckBox").onclick = function(){
	if (this.checked){
		toggleOn(newRoad, newRoadIL);
	} else {
		toggleOff(newRoad, newRoadIL);
	}
}	


	tourismArchKeyIL = "tourismArckKeyIL"
	document.getElementById("tourismArchKeyCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(allTourism, tourismArchKeyIL);
		} else {
			toggleOff(allTourism, tourismArchKeyIL);
		}
	}	

	impactedTourismIL = "impactedTourismIL"
	document.getElementById("tourismImpactedCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, impactedTourismIL);
		} else {
			toggleOff(newRoad, impactedTourismIL);

		}
	}	

	tourismExpansionIL = "tourismExpansionIL"
	document.getElementById("tourismExpandedCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, tourismExpansionIL);
		} else {
			toggleOff(newRoad, tourismExpansionIL);
		}
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
	document.getElementById("miningExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, miningExpansionIL);
		} else {
			toggleOff(newRoad, miningExpansionIL);
		}
	}			


	currentAgricultureIL = "currentAgricultureIL"
	document.getElementById("currentAgricultureCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(agZones, currentAgricultureIL);
		} else {
			toggleOff(agZones, currentAgricultureIL);
		}
	}	

	agExpansionIL = "agExpansionIL"
	document.getElementById("agExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, agExpansionIL);
		} else {
			toggleOff(newRoad, agExpansionIL);
		}
	}	



	currentTimberIL = "currentTimberIL"
	document.getElementById("timberCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(timberConcessions, currentTimberIL);
		} else {
			toggleOff(timberConcessions, currentTimberIL);
		}
	}	

	timberExpansionIL = "timberExpansionIL"
	document.getElementById("timberExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, timberExpansionIL);
		} else {
			toggleOff(newRoad, timberExpansionIL);
		}
	}	


	energyIL = "energyIL"
	document.getElementById("energyCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(dams, energyIL);
		} else {
			toggleOff(dams, energyIL);
		}
	}	

	potentialEnergyIL = "potentialEnergyIL"
	document.getElementById("energySitesCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(energySites, potentialEnergyIL);
		} else {
			toggleOff(energySites, potentialEnergyIL);
		}
	}			

	watershedsIL = "watershedsIL"
	document.getElementById("watershedsCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(water, watershedsIL);
		} else {
			toggleOff(water, watershedsIL);
		}
	}	

	CMCCAreasIL = "CMCCAreasIL"
	document.getElementById("CMCCAreasCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(cmccGeographicZone, CMCCAreasIL);
		} else {
			toggleOff(cmccGeographicZone, CMCCAreasIL);
		}
	}

	CMCCCommunitiesIL = "CMCCCommunitiesIL"
	document.getElementById("CMCCCommunitiesCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(cmccCommunities, CMCCCommunitiesIL);
		} else {
			toggleOff(cmccCommunities, CMCCCommunitiesIL);
		}
	}	

	roadsIL = "roadsIL"
	document.getElementById("roadsCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(allRoads, roadsIL);
		} else {
			toggleOff(allRoads, roadsIL);
		}
	}	



//Icon setups 
//function below should replace all others in this list, json and latlng values do not translate well when moved up top
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

