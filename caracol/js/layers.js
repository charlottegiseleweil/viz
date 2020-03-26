//Layer Styling
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
		"fillOpacity":0.5,
		"weight": 0.9,		
	}

	var currentTimberStyle = {
		"color": "#013220",
		"fillOpacity":0.8,
		"weight": 0.5,		
	}

	var waterwaysStyle = {
		"color": "#FC4A1A",
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
    iconUrl: 'img/monument.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var currentMiningIcon = L.icon({
    iconUrl: 'img/coal.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var solarBestIcon = L.icon({
    iconUrl: 'img/sun.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var solarGoodIcon = L.icon({
    iconUrl: 'img/sun-2.png',

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

	var windGoodIcon = L.icon({
    iconUrl: 'img/wind-2.png',

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
    iconUrl: 'img/hydro-power.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	//L.marker([16.872890378907783, -88.87390136718749], {icon: greenIcon}).addTo(mymap).bindPopup("Hi <img src= 'leafletpractice/imgs/placeholder.png'>");

//Layer Set-Up
	var newRoad = new L.Shapefile("data/newRoad.zip", {style: roadStyle});

	//var allAgriculture = new L.layerGroup([agZones]); //add expanded ag when available to finish
	var agZones = new L.Shapefile("data/ag_defined_v1.zip", {style: currentAgStyle});


	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip", {style: waterwaysStyle});
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip", {style: waterwaysStyle});
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip", {style: waterwaysStyle});

	var water = L.layerGroup([waterWays, waterBody, majorRivers]);

	var hotelLodging = L.geoJSON.ajax("data/hotelsSitesTourism.geojson", {pointToLayer:returnHotelMarker});


	var tourismSites = L.geoJSON.ajax("data/tourismSites.geojson", {pointToLayer:returntourismSitesMarker});
	var culturalSites = L.geoJSON.ajax("data/culturalSitesTourism.geojson", {pointToLayer:returnCulturalSitesMarker}); //These were all over, maybe filter, talk to team about which ones they identified for the region?
	var allTourism = L.layerGroup([hotelLodging, tourismSites, culturalSites]);

	var cmccCommunities = new L.geoJSON.ajax("data/cmccCommunititesGJ.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var cmccGeographicZone = new L.geoJSON.ajax("data/cmccGeographyCleaned.geojson", {style:CMCCGeographicZoneStyle });
	var bullRidgeCompartmentBoundry = new L.Shapefile("data/timberConcessions/BullRidgeCompartmentBoundry.zip", {style: currentTimberStyle});
	var CFR = new L.Shapefile("data/timberConcessions/CFR.zip", {style: currentTimberStyle});
	var FDPortionMPR = new L.Shapefile("data/timberConcessions/FD_Portion_MPR.zip", {style: currentTimberStyle});
	var PLCArea = new L.Shapefile("data/timberConcessions/PLCArea.zip", {style: currentTimberStyle});
	var RecinosMngtArea = new L.Shapefile("data/timberConcessions/RecinosMngtArea.zip", {style: currentTimberStyle});
	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip");
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip");
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip");
	var solarBest = new L.geoJSON.ajax("data/solarBestGJ.geojson", {pointToLayer:returnSolarBestMarker});
	var solarGood = new L.geoJSON.ajax("data/solarGoodGJ.geojson", {pointToLayer:returnSolarGoodMarker});
	var windBest = new L.geoJSON.ajax("data/windBestGJ.geojson", {pointToLayer:returnWindBestMarker});
	var windGood = new L.geoJSON.ajax("data/windGoodGJ.geojson", {pointToLayer:returnWindGoodMarker});
	var dams = new L.geoJSON.ajax("data/damsGJ.geojson", {pointToLayer:returnDamsMarker});
	var allRoads = new L.Shapefile("data/allRoads.zip", {style: allRoadsStyle});
	var currentMining = new L.geoJSON.ajax("data/miningRegionsGJ.geojson", {pointToLayer:returncurrentMiningMarker});

	var allEnergy = L.layerGroup([solarBest, solarGood, windBest, windGood, dams]);

	var roads4 = L.layerGroup([newRoad]);
		agZone = L.layerGroup([agZones]);
		cmccCommPoints = L.layerGroup([cmccCommunities]);
		cmccZone = L.layerGroup([cmccGeographicZone]);
		timberConcessions = L.layerGroup([bullRidgeCompartmentBoundry, FDPortionMPR, PLCArea, RecinosMngtArea]);
		water = L.layerGroup([waterWays, waterBody, majorRivers]);
		energySites = L.layerGroup([solarBest, solarGood, windBest, windGood]);
		allRoads = L.layerGroup([allRoads]);

	//document.getElementById("newRoad").onclick = function() {newRoadLayerToggle(newRoad)};
//Layer Toggling
	document.getElementById("newRoadCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("newRoadIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("newRoadIL");
			x.className = "close";
		}
	}


// layerTitles functions
// - - - - - - - - - - -

//Tourism
$(document).ready(function(){
    $("#allTourismCheckBox").click(function(){
        $("#tourismArchKeyCheckBox").prop("checked", true);
        	if (this.checked){
				allTourism.addTo(mymap);
				x = document.getElementById("tourismArckKeyIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(allTourism);
				x = document.getElementById("tourismArckKeyIL");
				x.className = "close";
			}
        $("#tourismImpactedCheckBox").prop("checked", true);
        	if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("impactedTourismIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(newRoad);
				x = document.getElementById("impactedTourismIL");
				x.className = "close";
			}
        $("#tourismExpandedCheckBox").prop("checked", true);
    		if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("tourismExpansionIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(newRoad);
				x = document.getElementById("tourismExpansionIL");
				x.className = "close";
			}
    });
    $("#tourismArchKeyCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
    $("#tourismImpactedCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
    $("#tourismExpandedCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
}); //minor bugs with layer toggling, when road as placeholder is replaced with true layer won't be an issue

//Mining
$(document).ready(function(){
    $("#allMiningCheckBox").click(function(){
        $("#miningCheckBox").prop("checked", true);
			if (this.checked){
				currentMining.addTo(mymap);
				x = document.getElementById("currentMiningIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(currentMining);
				x = document.getElementById("currentMiningIL");
				x.className = "close";
			}
        $("#miningExpansionCheckBox").prop("checked", true);
        	if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("impactedTourismIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(newRoad);
				x = document.getElementById("impactedTourismIL");
				x.className = "close";
			}

    });
    $("#miningCheckBox").click(function(){
        $("#allMiningCheckBox").prop("checked", false);
    });
    $("#miningExpansionCheckBox").click(function(){
        $("#allMiningCheckBox").prop("checked", false);
    });
}); 

//Agriculture
$(document).ready(function(){
    $("#allAgricultureCheckBox").click(function(){
        $("#currentAgricultureCheckBox").prop("checked", true);
			if (this.checked){
				agZones.addTo(mymap);
				x = document.getElementById("currentAgricultureIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(agZones);
				x = document.getElementById("currentAgricultureIL");
				x.className = "close";
			}
        $("#agExpansionCheckBox").prop("checked", true);
			if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("agExpansionIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(newRoad);
				x = document.getElementById("agExpansionIL");
				x.className = "close";
			}

    });
    $("#currentAgricultureCheckBox").click(function(){
        $("#allAgricultureCheckBox").prop("checked", false);
    });
    $("#agExpansionCheckBox").click(function(){
        $("#allAgricultureCheckBox").prop("checked", false);
    });
}); 

//Timber
$(document).ready(function(){
    $("#allTimberCheckBox").click(function(){
        $("#timberCheckBox").prop("checked", true);
			if (this.checked){
				timberConcessions.addTo(mymap);
				x = document.getElementById("currentTimberIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(timberConcessions);
				x = document.getElementById("currentTimberIL");
				x.className = "close";
			}
        $("#timberExpansionCheckBox").prop("checked", true);
			if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("timberExpansionIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(newRoad);
				x = document.getElementById("timberExpansionIL");
				x.className = "close";
			}

    });
    $("#timberCheckBox").click(function(){
        $("#allTimberCheckBox").prop("checked", false);
    });
    $("#timberExpansionCheckBox").click(function(){
        $("#allTimberCheckBox").prop("checked", false);
    });
    $("#alltimberCheckBox").click(function(){
        $("#allTimberCheckBox").prop("checked", false);
        $("#timberExpansionCheckBox").prop("checked", false);
    });
}); 


//Energy
$(document).ready(function(){
    $("#allEnergySitesCheckBox").click(function(){
        $("#energyCheckBox").prop("checked", true);
			if (this.checked){
				dams.addTo(mymap);
				x = document.getElementById("energyIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(dams);
				x = document.getElementById("energyIL");
				x.className = "close";
			}
        $("#energySitesCheckBox").prop("checked", true);
			if (this.checked){
				energySites.addTo(mymap);
				x = document.getElementById("potentialEnergyIL");
				x.className = "ILImage";
			} else {
				mymap.removeLayer(energySites);
				x = document.getElementById("potentialEnergyIL");
				x.className = "close";
			}

    });
    $("#energyCheckBox").click(function(){
        $("#allEnergySitesCheckBox").prop("checked", false);
    });
    $("#energySitesCheckBox").click(function(){
        $("#allEnergySitesCheckBox").prop("checked", false);
    });
}); 


	/*document.getElementById("allTourismCheckBox").onclick = function(){
		if (this.checked){
			allTourism.addTo(mymap);
			x = document.getElementById("allTourismIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(allTourism);
			x = document.getElementById("allTourismIL");
			x.className = "close";
		}
	}*/

	document.getElementById("tourismArchKeyCheckBox").onclick = function(){
		if (this.checked){
			allTourism.addTo(mymap);
			x = document.getElementById("tourismArckKeyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(allTourism);
			x = document.getElementById("tourismArckKeyIL");
			x.className = "close";
		}
	}	

	document.getElementById("tourismImpactedCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("impactedTourismIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("impactedTourismIL");
			x.className = "close";
		}
	}	

	document.getElementById("tourismExpandedCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("tourismExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("tourismExpansionIL");
			x.className = "close";
		}
	}			

	/*document.getElementById("allMiningCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allMiningIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allMiningIL");
			x.className = "close";
		}
	}	*/

	document.getElementById("miningCheckBox").onclick = function(){
		if (this.checked){
			currentMining.addTo(mymap);
			x = document.getElementById("currentMiningIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(currentMining);
			x = document.getElementById("currentMiningIL");
			x.className = "close";
		}
	}	

	document.getElementById("miningExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("miningExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("miningExpansionIL");
			x.className = "close";
		}
	}			

	/*document.getElementById("allAgricultureCheckBox").onclick = function(){
		if (this.checked){
			agZones.addTo(mymap);
			x = document.getElementById("allAgricultureIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(agZones);
			x = document.getElementById("allAgricultureIL");
			x.className = "close";
		}
	}*/	

	document.getElementById("currentAgricultureCheckBox").onclick = function(){
		if (this.checked){
			agZones.addTo(mymap);
			x = document.getElementById("currentAgricultureIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(agZones);
			x = document.getElementById("currentAgricultureIL");
			x.className = "close";
		}
	}	

	document.getElementById("agExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("agExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("agExpansionIL");
			x.className = "close";
		}
	}	

	/*document.getElementById("allTimberCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allTimberIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allTimberIL");
			x.className = "close";
		}
	}	*/

	document.getElementById("timberCheckBox").onclick = function(){
		if (this.checked){
			timberConcessions.addTo(mymap);
			x = document.getElementById("currentTimberIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(timberConcessions);
			x = document.getElementById("currentTimberIL");
			x.className = "close";
		}
	}	

	document.getElementById("timberExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("timberExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("timberExpansionIL");
			x.className = "close";
		}
	}	

	/*document.getElementById("allEnergySitesCheckBox").onclick = function(){
		if (this.checked){
			allEnergy.addTo(mymap);
			x = document.getElementById("allEnergyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(allEnergy);
			x = document.getElementById("allEnergyIL");
			x.className = "close";
		}
	}	*/

	document.getElementById("energyCheckBox").onclick = function(){
		if (this.checked){
			dams.addTo(mymap);
			x = document.getElementById("energyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(dams);
			x = document.getElementById("energyIL");
			x.className = "close";
		}
	}	

	document.getElementById("energySitesCheckBox").onclick = function(){
		if (this.checked){
			energySites.addTo(mymap);
			x = document.getElementById("potentialEnergyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(energySites);
			x = document.getElementById("potentialEnergyIL");
			x.className = "close";
		}
	}			

	document.getElementById("watershedsCheckBox").onclick = function(){
		if (this.checked){
			water.addTo(mymap);
			x = document.getElementById("watershedsIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(water);
			x = document.getElementById("watershedsIL");
			x.className = "close";
		}
	}	

	document.getElementById("CMCCAreasCheckBox").onclick = function(){
		if (this.checked){
			cmccGeographicZone.addTo(mymap);
			x = document.getElementById("CMCCAreasIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(cmccGeographicZone);
			x = document.getElementById("CMCCAreasIL");
			x.className = "close";
		}
	}

	document.getElementById("CMCCCommunitiesCheckBox").onclick = function(){
		if (this.checked){
			cmccCommunities.addTo(mymap);
			x = document.getElementById("CMCCCommunitiesIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(cmccCommunities);
			x = document.getElementById("CMCCCommunitiesIL");
			x.className = "close";
		}
	}	

	document.getElementById("roadsCheckBox").onclick = function(){
		if (this.checked){
			allRoads.addTo(mymap);
			x = document.getElementById("roadsIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(allRoads);
			x = document.getElementById("roadsIL");
			x.className = "close";
		}
	}		

	/*function newRoadLayerToggle(layer) {
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("newRoadIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("newRoadIL");
			x.className = "close";
		}
	}


	}*/

	
	/*function layerOnOff(layer, shouldAddLayer, legendDiv){
   if (shouldAddLayer) {
      setTimeout(() => layer.addTo(mymap), 0);
      $(legendDiv).removeClass('hide');
   } else {
      map.removeLayer(layer);
      $(legendDiv).addClass('hide');
   }
}

function createCheckboxForLayer (cssSelector, layer, ledendDiv) {
   $(cssSelector).change(function(){
      layerOnOff(layer, this.checked, ledendDiv);
   });
}*/

//Marker Functions
//function returnHotelMarker(json, latlng){
	//return L.circleMarker(latlng, {radius:10, color:'deeppink'});
//}



function returnHotelMarker(json, latlng){
	return L.marker(latlng, {
		icon: hotelLodgingIcon
	});
}

function returntourismSitesMarker(json, latlng){
	return L.marker(latlng, {
		icon: tourismSitesIcon
	});
}

function returnCulturalSitesMarker(json, latlng){
	return L.marker(latlng, {
		icon: culturalSitesIcon
	});
}

function returncurrentMiningMarker(json, latlng){
	return L.marker(latlng, {
		icon: currentMiningIcon
	});
}

function returnCMCCCommunitiesMarker(json, latlng){
	return L.marker(latlng, {
		icon: cmccCommunityIcon //update icon
	});
}

function returnSolarBestMarker(json, latlng){
	return L.marker(latlng, {
		icon: solarBestIcon
	});
}

function returnSolarGoodMarker(json, latlng){
	return L.marker(latlng, {
		icon: solarGoodIcon
	});
}

function returnWindBestMarker(json, latlng){
	return L.marker(latlng, {
		icon: windBestIcon
	});
}

function returnWindGoodMarker(json, latlng){
	return L.marker(latlng, {
		icon: windGoodIcon
	});
}

function returnDamsMarker(json, latlng){
	return L.marker(latlng, {
		icon: damsIcon
	});
}





