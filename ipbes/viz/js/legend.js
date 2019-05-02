// Initializations
let colorScheme = d3.schemeReds[6];
let colorSchemeDisplay = d3.schemeReds[9];
let changeColorScheme = d3.schemeRdYlGn[5];

let changeColorSchemeDisplay = d3.schemeRdYlGn[9];

//Data and color scale and legend
let colorScale = d3.scaleThreshold()
  .domain([20, 40, 60, 80, 99, 100])
  .range(colorScheme);

// The color scheme which displays more gradient
let colorScaleDisplay;
parseDataLegends('../Data/water_quantiles.csv', change_labels, 0)


// Color scale for changes for 2D Map
let changeColorScale = d3.scaleThreshold()
  .domain([-99, -49, 1, 51, 101])
  .range(changeColorScheme);

// Change color scale which has more gradient
let changeColorScaleDisplay = d3.scaleThreshold()
  .domain([-99, -74, -49, -24, 0, 24, 49, 74, 101])
  .range(changeColorSchemeDisplay);

let svg_legend, svg_change_legend;

function makeLegendInitializations(twoLegends) {
  if (twoLegends) {
    svg_legend = d3.select(".box.box-2").append("svg").attr("class", "legend_one");
    svg_change_legend = d3.select(".box.box-2").append("svg").attr("class", "legend_two");
  } else {
    svg_legend = d3.select(".box.box-1").append("svg").attr("class", "legend_one");
    svg_change_legend = d3.select(".box.box-1").append("svg").attr("class", "legend_two");
  }
}

function makeChangeLegend(colorScale) {
  // This is for 2D Maps
  // Getting the Legend and setting the color scale on the legend
  let change_legend = svg_change_legend.append("g")
    .attr("class", "legendThreshold")
    .attr("transform", "translate(0,40)");

  change_legend.append("text")
    .attr("class", "caption")
    .attr("x", 0)
    .attr("y", -4)
    .text("% change");

  let labels_change = ['<= -100%', '-50%', '0%', '50%', '>= 100%'];
  let c_legend = d3.legendColor()
    .labels(function(d) {
      return labels_change[d.i];
    })
    .shapePadding(4)
    .scale(changeColorScale);
  svg_change_legend.select(".legendThreshold")
    .call(c_legend);
}

function makeLegend(colorScale) {
  // This is for 3D Maps
  // Getting the Legend and setting the color scale on the legend
  let g_legend = svg_legend.append("g")
    .attr("class", "legendThreshold")
    .attr("transform", "translate(0,20)");

  g_legend.append("text")
    .attr("class", "caption")
    .attr("x", 0)
    .attr("y", -4)
    .text("Quantiles");

  let labels = ['1-20', '21-40', '41-60', '61-80', '81-99', '100'];
  let legend = d3.legendColor()
    .labels(function(d) {
      return labels[d.i];
    })
    .shapePadding(4)
    .scale(colorScale);
  svg_legend.select(".legendThreshold")
    .call(legend);
}

// Updating the legend since we change between different projections
function updateLegend(colorScale) {
  svg_legend.selectAll('*').remove();
  makeLegend(colorScale);
}

// Function to update the legend position when switching to 2D/3D
// since 2D has 2 legends (one for change map and one for normal map)
function updateLegendPosition(twoLegends) {
  if (twoLegends) {
    makeLegendInitializations(true);
    makeLegend(colorScale);
    makeChangeLegend(changeColorScale);
    svg_change_legend.attr("style", "position:absolute; top:67vh; left:6vh");
    svg_legend.attr("style", "position:absolute; top:35vh; left:6vh");
  } else {
    $('.box-1 svg').remove();
    $('.box-2 .legend_one').remove();
    $('.box-2 .legend_two').remove();
    makeLegendInitializations(false);
    makeLegend(colorScale);
  }
}

function create2DLegend() {
  let size = 3;
  let step = 70;

  let X_2D = d3.scaleLinear()
    .domain([0, size])
    .range(['rgb(211,211,211)', 'rgb(0,200,0)']);

  let Y_2D = d3.scaleLinear()
    .domain([0, size])
    .range(['rgb(211,211,211)', 'rgb(234,55,247)']);

  let canvas = d3.select(".box.box-1-global").append('canvas')
    .attr('width', size * step)
    .attr('height', size * step + 10)
    .node();

  let context = canvas.getContext('2d');

  d3.range(0, size).forEach(function(y) {
    d3.range(0, size).forEach(function(x) {
      let color = d3.scaleLinear()
        .domain([-1, 1])
        .range([X_2D(x), Y_2D(y)])
        .interpolate(d3.interpolateRgb);

      let strength = (y - x) / (size - 2);

      context.fillStyle = color(strength);
      context.beginPath();
      context.rect((x + 0.001 / 3) * step, (y / 2) * step, step - 15, 25);
      context.fill();
    });
  });
}

function change_labels(data, dataset_pos) {
  colorScaleDisplay = d3.scaleThreshold()
    .domain([Number(data[dataset_pos]['10']),
      Number(data[dataset_pos]['20']),
      Number(data[dataset_pos]['30']),
      Number(data[dataset_pos]['40']),
      Number(data[dataset_pos]['55']),
      Number(data[dataset_pos]['65']),
      Number(data[dataset_pos]['75']),
      Number(data[dataset_pos]['90']),
      Number(data[dataset_pos]['100'])
    ])
    .range(colorSchemeDisplay);


}


function parseDataLegends(url, callBack, dataset_pos) {
  Papa.parse(url, {
    download: true,
    dynamicTyping: false, // Parse values as their true type (not as strings)
    header: true, // to parse the data as a dictionary
    complete: function(results) {
      callBack(results.data, dataset_pos);
    }
  });
}
//create2DLegend();