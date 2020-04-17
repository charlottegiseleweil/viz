

//Data Download Toggle
      $(document).ready(function(){
         $("#dataDownloadButton").click(function(){
            $("a.dataLinkClose").toggleClass("dataLink");
         });
      });


//Data Download Button Change
	$(document).ready(function(){
		$("#dataDownloadButton").click(function(){
			$("#dataDownloadButton").toggleClass("buttonPressed");
		});
	});
	