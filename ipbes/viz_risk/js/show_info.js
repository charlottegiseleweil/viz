function showAbout() {
  /*
  let leftMenu = document.getElementById('left-menu');
  if(leftMenu){
      leftMenu.style.visibility = "hidden";
  }

  includeHTML();*/
}

function aboutHideShow(hideOrshow) {
  if (hideOrshow == 'hide') {
    document.getElementById('aboutDiv').style.display = "none";
    let leftMenu = document.getElementById('left-menu');
    if (leftMenu) {
      leftMenu.style.visibility = "visible";
    }
  } else if (localStorage.getItem("aboutWasShown") == null) {
    localStorage.setItem("aboutWasShown", 1);
    document.getElementById('aboutDiv').style.visibility = "hidden";
  }
}

function includeHTML() {
  let z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};