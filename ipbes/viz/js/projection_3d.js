// Initialize the 3D projection for ready
function ready(g, path) {
  d3.json("world/countries.json", function(error, data) {
    if (error) throw error;

    let features = topojson.feature(data, data.objects.units).features;
    g.selectAll("path")
      .data(features)
      .enter().append("path")
      // Chloropleth code
      .attr("fill", function(d) {
        // Pull data for particular iso and set color - Not able to fill it
        d.total = data_c[d.properties.iso3] || 0;
        return colorScale(d.total);
      })
      // End of Chloropleth code
      .attr("d", path)
      .attr("class", "feature")
      .on("click", clicked);
    // Creates a mesh around the border
    g.append("path")
      .datum(topojson.mesh(data, data.objects.units, function(a, b) {
        return a !== b;
      }))
      .attr("class", "mesh")
      .attr("d", path);
  });
}

// Render the rotation of the projection
function render() {
  update(projection.rotate());
}

// Update the euler angles for  projection of the 3D globe on rotation
function update(eulerAngles) {
  projection.rotate(eulerAngles);
  svg.selectAll("path").attr("d", path);
  svg.selectAll(".plot-point")
    .attr("cx", d => projection(d)[0])
    .attr("cy", d => projection(d)[1]);
}

// All the initialization and magic for projection 3D
function projection3D() {
  checked3D = document.getElementById("checked3D").value;
  checked2D = document.getElementById("checked2D").value;
  document.getElementsByClassName("year-text-2015")[0].style.display = "none";
  document.getElementsByClassName("year-text-2050")[0].style.display = "none";
  svg_map2.call(zoom_2D.transform, d3.zoomIdentity);
  document.getElementsByClassName("map-slider")[0].style.display = "block";
  if (checked3D === 'true') {
    zoom_2D = null; // Set zoom 2D is null

    // Remove the points and change the style depending upon the display
    svg.selectAll('.plot-point').remove();
    document.getElementsByClassName('box box-1')[0].style.display = "flex";
    document.getElementsByClassName('box box-2')[0].style.width = "62%";

    document.getElementsByClassName('box box-3')[0].style.display = "flex";
    document.getElementsByClassName('box box-3')[1].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementById("svg_map2").style.overflow = "";
    document.getElementById("container").style.display = "none";
    colorScheme = d3.schemeGreens[6];
    colorSchemeDisplay = d3.schemeGreens[9];


    changeProjection(false);

    // Change the variables
    checked3D = "true";
    checked2D = "false";
    svg.on(".zoom", null);

    document.getElementsByClassName('loader')[0].style.display = "none";
    document.getElementsByClassName('loader')[1].style.display = "none";
    // Make the 3D projection to come back to its own form :) because from 2D to 3D
    svg.call(zoom_3D.transform, d3.zoomIdentity);

    // Get the scroll to be disabled when you are inside the div and svg
    $('.map1, .map2, #svg_map1, #svg_map2').bind(
      'mousewheel DOMMouseScroll',
      function(e) {}
    );

    // map 1 has more size
    updateLegendPosition(false);
    map2.setAttribute("style", "width: 0; height: 0;");
    map1.setAttribute("style", "width: 100%; height: 94%;");

    // Removing the name of the maps from 3D which were present in 2D
    document.getElementById("map-name-1").style.display = "none";

    // Make the svg map2
    svg.attr("transform", "translate(0, 0)");
    svg_map2.attr("width", 0).attr("height", 0);

    // change variables and remove the horizontal line
    document.getElementById("checked3D").disabled = true;
    document.getElementById("checked2D").disabled = false;
    document.getElementsByClassName('map-diff-line')[0].style.width = "0";

    // Removes slider for 2D in order to put in the one for 3D
    d3.select(".map-slider").html("");
    runSlider("1945", false)
    createSlider();
  }
}