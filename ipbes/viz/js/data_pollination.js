// Current dataset depending on what we visualize
// and also the initializations
let firstTime = true;
let dataset = '../Data/aggregated_country.csv';
let dataset_2D = '../Data/nc_degree.csv';
let current_viz = "Food Energy";
let change_dataset = '../Data/ncp_2d_change.csv';
let country_data_2D;
let map_title = document.getElementById('map-name-1');
let text_metric = document.getElementById('story-text');
// plot points on the map for 2D and 3D map


function loadGlobalData(dataset) {
  global_data_c = load(dataset);
  data_c = {};
  d3.csv(dataset, function(error, data) {
    data.forEach(function(d) {
      data_c[d.iso3] = global_data_c[d.iso3][current_year];
    });
  });
}

function load(dataset) {
  let result = {};
  d3.csv(dataset, function(error, data) {
    data.forEach(function(d) {
      result[d.iso3] = d;
    });
  });
  return result;
}

// Initialize the data for 2D by making a list
function initialize_2D(period, data_) {
  let coordstoplot = [];
  for (let key in data_) {
    coordstoplot.push([data_[key]['lat'], data_[key]['long'], data_[key][period]]);
  }
  return coordstoplot;
}

function showData(the_g, data, colorScaleSelect) {
  // Add circles to the country which has been selected
  // Removing part is within

  if (checked2D == 'true') {
    // This is just for 2D, we are creating a raster by creating a rectangle
    the_g.selectAll(".plot-point")
      .data(data).enter()
      .append("polygon")
      .classed('plot-point', true)
      .attr("points", function(d) {
        let x_1 = projection([d['lat1'], d['long1']])[0];
        let y_1 = projection([d['lat1'], d['long1']])[1];
        let x_2 = projection([d['lat2'], d['long2']])[0];
        let y_2 = projection([d['lat2'], d['long2']])[1];
        let x_3 = projection([d['lat3'], d['long3']])[0];
        let y_3 = projection([d['lat3'], d['long3']])[1];
        let x_4 = projection([d['lat4'], d['long4']])[0];
        let y_4 = projection([d['lat4'], d['long4']])[1];
        let x_5 = projection([d['lat5'], d['long5']])[0];
        let y_5 = projection([d['lat5'], d['long5']])[1];

        return (x_1 + ',' + y_1 + ' ' +
          x_2 + ',' + y_2 + ' ' +
          x_3 + ',' + y_3 + ' ' +
          x_4 + ',' + y_4 + ' ' +
          x_5 + ',' + y_5);
      })
      .attr("fill", function(d) {
        color = d['2015'] || 0;
        if (d['2015'] == 0) {
          return "#ffffff00";
        }
        return colorScaleSelect(color);
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }
}

function showDataSSP(the_g, data, colorScaleSelect) {
  // Add circles to the country which has been selected
  // Removing part is within

  if (checked2D == 'true') {
    // This is just for 2D, we are creating a raster by creating a rectangle
    the_g.selectAll(".plot-point")
      .data(data).enter()
      .append("polygon")
      .classed('plot-point', true)
      .attr("points", function(d) {
        let x_1 = projection([d['lat1'], d['long1']])[0];
        let y_1 = projection([d['lat1'], d['long1']])[1];
        let x_2 = projection([d['lat2'], d['long2']])[0];
        let y_2 = projection([d['lat2'], d['long2']])[1];
        let x_3 = projection([d['lat3'], d['long3']])[0];
        let y_3 = projection([d['lat3'], d['long3']])[1];
        let x_4 = projection([d['lat4'], d['long4']])[0];
        let y_4 = projection([d['lat4'], d['long4']])[1];
        let x_5 = projection([d['lat5'], d['long5']])[0];
        let y_5 = projection([d['lat5'], d['long5']])[1];

        return (x_1 + ',' + y_1 + ' ' +
          x_2 + ',' + y_2 + ' ' +
          x_3 + ',' + y_3 + ' ' +
          x_4 + ',' + y_4 + ' ' +
          x_5 + ',' + y_5);
      })
      .attr("fill", function(d) {
        color = d[current_SSP] || 0;
        if (d[current_SSP] == 0) {
          return "#ffffff00";
        }
        return colorScaleSelect(color);
      })
      .on('mouseover', tip2.show)
      .on('mouseout', tip2.hide);
  }
}

// Update data loads the data depending upon the columns for Vitamin, Energy and Folate
// and changes the storytelling
function updateData(data_type) {
  switch (data_type) {
    case "Population":
      map_title.innerHTML = "People Exposed: Pollination-Dependent Population";
      region_text = "Pollination-Dependent Population";
      dataset_2D = '../Data/pol_pop.csv';
      colorScaleDisplay = parseDataLegends('../Data/pollination_quantiles.csv', change_labels, 3)
      colorScheme = d3.schemePurples[6];
      colorSchemeDisplay = d3.schemePurples[9];
      text_metric.innerHTML = "We consider “local” beneficiaries as populations whose dietary requirements exceed pollinator-independent production within 100 km.";

      break;
    case "NCP":
      map_title.innerHTML = "Nature's Contribution to Crop Pollination";
      region_text = "Nature's Contribution to Crop Pollination";
      colorScaleDisplay = parseDataLegends('../Data/pollination_quantiles.csv', change_labels, 0)
      dataset_2D = '../Data/NCP.csv';
      colorScheme = d3.schemeGreens[6];
      text_metric.innerHTML = "Nature’s contribution to pollination is represented by the proportion of total potential pollination-dependent crop output that is produced.";
      colorSchemeDisplay = d3.schemeGreens[9];
      break;
    case "Crop":
      map_title.innerHTML = "Potential Need: Pollination-Dependant Crop Production";
      region_text.innerHTML = "Pollination-Dependant Crop Production";
      dataset_2D = '../Data/potential.csv';
      text_metric.innerHTML = "The potential human need for benefits of nature is manifested by the total agricultural crop output that is dependent to some degree on insect pollination.";
      colorScaleDisplay = parseDataLegends('../Data/pollination_quantiles.csv', change_labels, 1)
      colorScheme = d3.schemeOranges[6];
      colorSchemeDisplay = d3.schemeOranges[9];
      break;
    case "Lost":
      map_title.innerHTML = "Deficit: Lost Crop Production";
      region_text = "Lost Crop Production";
      dataset_2D = '../Data/unmet_need.csv';
      colorScaleDisplay = parseDataLegends('../Data/pollination_quantiles.csv', change_labels, 2)
      colorScheme = d3.schemeReds[6];
      colorSchemeDisplay = d3.schemeReds[9];
      text_metric.innerHTML = "A deficit in pollination can be measured as the amount of crop losses due to insufficiently pollinated crops for pollination.";
      break;
  }
  //Loader for 4 scenarios
  disappearMaps();
  mapsTimeout(500);

  colorScale = d3.scaleThreshold()
    .domain([20, 40, 60, 80, 99, 100])
    .range(colorScheme);

  // The color scheme which displays more gradient
  colorScaleDisplay = d3.scaleThreshold()
    .domain([11, 22, 33, 44, 55, 66, 77, 88, 100])
    .range(colorSchemeDisplay);

  updateLegend(colorScale);
  parseData(dataset_2D, doStuff, true);
  svg_map2.selectAll('.plot-point').remove();
}

// Access data loads the daa for 3D and 2D and depending upon that colors
function accessData() {
  g.selectAll("path").attr("fill", function(d) {
      // Pull data for particular iso and set color - Not able to fill it
      if (checked3D == 'true') {
        d.total = data_c[d.properties.iso3] || 0;
        return colorScaleDisplay(d.total);
      } else {
        return '#D3D3D3';
      }
    })
    .attr("d", path);
}

function doStuff(data, firstTime) {
  //Data is usable here
  svg.selectAll('.plot-point').remove();
  if (firstTime) {
    showData(g_map2, data, colorScaleDisplay);
  }
  showDataSSP(g, data, changeColorScaleDisplay);

}

function parseData(url, callBack, firstTime) {
  Papa.parse(url, {
    download: true,
    dynamicTyping: false, // Parse values as their true type (not as strings)
    header: true, // to parse the data as a dictionary
    complete: function(results) {
      callBack(results.data, firstTime);
    }
  });
}