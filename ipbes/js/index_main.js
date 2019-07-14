whenDocumentLoaded(() => {
  addMenu(1);
  d3.selectAll("#landingpage").attr("class", "hidden");
  if(!localStorage.tour_end){
    tour.restart();
  }
  
});

function whenDocumentLoaded(action) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", action);
    } else {
      // `DOMContentLoaded` already fired
      action();
    }
  }