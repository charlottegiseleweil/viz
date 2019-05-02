// Waypoint initialization - since use of library
// let waypoint = new Waypoint({
//   element: document.getElementById('3rd_box'),
//   handler: function() {
//     PopUp('show')
//   }
// });

// For the popup window - controls the showing and hiding
function PopUp(hideOrshow) {
  if (hideOrshow == 'hide') {
    document.getElementById('ac-wrapper').style.display = "none";
  } else if (localStorage.getItem("popupWasShown") == null) {
    localStorage.setItem("popupWasShown", 1);
    document.getElementById('ac-wrapper').removeAttribute('style');
  }
}

// For hiding the popup window
function hideNow(e) {
  if (e.target.id == 'ac-wrapper') document.getElementById('ac-wrapper').style.display = 'none';
}

// For showing the INFO popup window
function showNow() {
  document.getElementById('ac-wrapper').style.display = "inline";
}

// For showing the ABOUT popup window
function showAbout() {
  document.getElementById('about').style.display = "inline";
}

function aboutHideShow(hideOrshow) {
  if (hideOrshow == 'hide') {
    document.getElementById('about').style.display = "none";
  } else if (localStorage.getItem("aboutWasShown") == null) {
    localStorage.setItem("aboutWasShown", 1);
    document.getElementById('about').removeAttribute('style');
  }
}


// Embed some HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();