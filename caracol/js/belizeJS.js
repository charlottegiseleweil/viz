   
   //Layer Checks
   function dataDownloadCheck(){
      dataDownCheck = document.getElementById("dataDownloadPanel");
         if (dataDownCheck.className == "dataDownload"){
            dataDownCheck.className="close";
         }     
   }
   function aboutPanelCheck(){
      aboutCheck = document.getElementById("AboutPanel");
      if (aboutCheck.className == "AboutPanel"){
         aboutCheck.className = "close";
      }
   }
   function LULC1Check(){
      lulc1Check = document.getElementById("LULCPanel1");
      if (lulc1Check.className == "LULCpanel"){
         lulc1Check.className="close";
      }
   }
   function LULC2Check(){
      lulc2Check = document.getElementById("LULCPanel2");
      if (lulc2Check.className == "LULCpanel"){
         lulc2Check.className="close";
      }
   }
   function LULC3Check(){
      lulc3Check = document.getElementById("LULCPanel3");
      if (lulc3Check.className == "LULCpanel"){
         lulc3Check.className="close";
      }
   }

   //About Panel
    function aboutPanelClose(){
      x = document.getElementById("AboutPanel");
      x.className="close";
   }

   function aboutPanelOpen(){
      dataDownloadCheck();
         LULC1Check();
         LULC2Check();
         LULC3Check();
      x = document.getElementById("AboutPanel");
      x.className="AboutPanel";
   }


   //Data Download Panel
   function dataPanelClose(){
         x = document.getElementById("dataDownloadPanel");
         x.className="close";
   }

   function dataPanelOpen(){
      aboutPanelCheck();
      LULC1Check();
         LULC2Check();
         LULC3Check();
         x = document.getElementById("dataDownloadPanel");
         x.className="dataDownload";
   }

   //LULC Panel
   function LULCPanelClose1(){ //can probably do a get element by class for all panels for this later
      x = document.getElementById("LULCPanel1");
      x.className="LULCclose";
   }

   function LULCPanelClose2(){
      x = document.getElementById("LULCPanel2");
      x.className="LULCclose";
   }

   function LULCPanelClose3(){
      x = document.getElementById("LULCPanel3");
      x.className="LULCclose";
   }

   function LULCPanelClose(){
      LULCPanelClose1();
      LULCPanelClose2();
      LULCPanelClose3();
   }

   function LULCPanelOpen(){
      aboutPanelCheck();
      dataDownloadCheck();
         x =document.getElementById("LULCPanel1");
         x.className="LULCpanel";
         y =document.getElementById("LULCPanel2");
         y.className="LULCpanel";
         z =document.getElementById("LULCPanel3");
         z.className="LULCpanel";
   }

/*//About Panel 
function aboutPanelClose(){
	x = document.getElementById("AboutPanel");
	x.className="close";
}

function aboutPanelOpen(){
   dataDownCheck = document.getElementById("dataDownloadPanel");
   if (dataDownCheck.className == "dataDownload"){
      dataDownCheck.className = "close";
   }

	x = document.getElementById("AboutPanel");
	x.className="AboutPanel";
}

//LULC Panels

function LULCPanelClose1(){ //can probably do a get element by class for all panels for this later
   x = document.getElementById("LULCPanel1");
   x.className="LULCclose";
}

function LULCPanelClose2(){
   x = document.getElementById("LULCPanel2");
   x.className="LULCclose";
}

function LULCPanelClose3(){
   x = document.getElementById("LULCPanel3");
   x.className="LULCclose";
}
//class name changes to .close when closed, LULCclose
function LULCPanelOpen(){
   x =document.getElementById("LULCPanel1");
   x.className="LULCpanel";
   y =document.getElementById("LULCPanel2");
   y.className="LULCpanel";
   z =document.getElementById("LULCPanel3");
   z.className="LULCpanel";
}

//Data Download Panel
function dataPanelClose(){
   x = document.getElementById("dataDownloadPanel");
   x.className="close";
}

function dataPanelOpen(){
   x = document.getElementById("dataDownloadPanel");
   x.className="dataDownload";
}*/

