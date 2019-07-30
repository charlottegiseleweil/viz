const active_button_color = "hsl(129, 67%, 64%)";
let case_id_display;

function buildLeftMenu(){
  //clear left menu, in case it's being overwritten
  $('#left-menu').html("");
  //add left-menu title
  chapters = data_loader.chapters;
  cases = data_loader.cases;
  //add chapter number to (main) left-menu
  $('#left-menu').append("<span id=left-chapter-home class='left-chapter-helper' title='Home' onclick=home_menu();><i class='fas fa-globe-africa'></i></span>");
  $('#left-menu').append("<span id=left-chapter-question class='left-chapter-helper' title='Tutorial' onclick=tutorial();><i class='fas fa-question'></i></span>");
  $('#left-menu').append("<span id=left-chapter-about class='left-chapter-helper' title='About Us' onclick=openAbout();><i class='fas fa-address-card'></i></span><hr>");
  //$('#left-menu').append("<span id='left-chapter-mechanism' class='left-chapter-helper mechanism-button' title='Mechanisms' onclick=openNav();><i class='fas fa-cog'></i></span><hr>");

  add_tooltip("#left-menu #left-chapter-home");
  add_tooltip("#left-menu #left-chapter-question");
  add_tooltip("#left-menu #left-chapter-about");
  add_tooltip("#left-menu #left-chapter-mechanism");

  //$('#bottom-menu').append("<span id='by-type-button' class='bottom-menu-element' title='Browse by type' onclick='openNav();'>By Type</span>");

  refresh_left_menu();
  //$('#left-menu').append("<span id=left-chapter-0 class='left-chapter' title='Overview' onclick=caseClick("+0+","+1+");>" +0+ "</span>");
}

function caseClick(chapter_id,case_id){

  //if chapter is clicked, go to first case, except for intro
  if(case_id==0) case_id = data_loader.chapters[chapter_id].cases[0].id;

  data_loader.active_case = data_loader.cases[case_id];


  //set new active country
  data_loader.active_country =data_loader.cases[case_id].country;
  refreshLayers();
  zoom_to(cases[case_id], false)
  display_figure(cases[case_id])


  //special handling for intro case, resets to default
  if(data_loader.active_case.chapter.id=="0") {
      //update chapter title
      $('#right-subtitle').html(data_loader.active_case.chapter.title)
      //home_menu();
  }
  else{
    //update chapter title
    $('#right-subtitle').html(data_loader.active_case.chapter.id +': '+data_loader.active_case.chapter.title)
  }
  //[right-menu] hide all cases (text) except active one
  $(".right-case").hide()
  $("#right-case-"+case_id).show();
  //$("#right-case-"+case_id).slideDown( "slow",  function() {});

  //[left-menu] set the color on clicked chapter button (and not others)
  $('.left-chapter').css('background-color', 'black')
  $('#left-chapter-'+chapter_id).css('background-color', 'hsl(129, 67%, 64%)')

  //[left-menu] display submenu of active chapter (and not others)
  $(".left-menu-sub").hide()
  $("#left-menu-sub-"+chapter_id).show()

  //[left-menu] set the color on clicked case button (and not others)
  $('.left-case').css('background-color', 'black')
  $('#left-case-'+case_id).css('background-color', 'hsl(129, 67%, 64%)')

}

async function home_menu(){

  //clean the map of dynamic figues
  await clean_layers();


  //set world as active country
  data_loader.active_country = data_loader.countries['World'];
  //browsing all cases again
  data_loader.browsing_all_cases = true;
  //resets layers
  await refreshLayers();
  await buildLeftMenu();
  //zoom to world
  zoom_to(data_loader.active_country, true);
  console.log("moved to: "+data_loader.active_country.name);
  //use all data again
  await data_loader.prepareDataframes()
  //rebuild left and right menu
  await buildRightMenu();
  await buildLeftMenu();
  $(".tooltip").hide();
  //remove country name display
    //$("#country-display-panel").hide();
  $("#country-display-panel-reg").hide();
  $("#country-display-panel-mech").hide();

}

function tutorial(){
intro.start();
}

function add_tooltip(path){
  $(path).tooltip(
    {
      show: { duration: 800 },
      position: { my: "left center", at: "right+10 center" }
    }
  );
}

function openAbout() {
  document.getElementById("myNav").style.width = "100%";
  $("#myNav").load("static/about.html");
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  $("#myNav").load("static/mechanism.html", function(){
    if(data_loader.browsing_all_cases){
      $("#country-display-panel-mech").hide()
    }
    else{
      $("#country-display-mech").html(data_loader.active_country.name.toUpperCase());
      $("#country-display-panel-mech").show()
    }
  });


  console.log("first key",data_loader.mechanisms[Object.keys(data_loader.mechanisms)[0]]);

}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

async function mechanismCaseClick(case_id){
  console.log(case_id)
  await closeNav();
  caseClick(case_id.split("-")[0],case_id);
}

function changeImage(e) {
//  $(".mechanism-img").attr("src","./static/mechanisms/"+e.name+".png");
  data_loader.mechanisms[e.name].change_image();
  data_loader.mechanisms[e.name].list_chapters_on_overlay();
}

function refresh_left_menu(){
  for (var i in chapters){
    current_chapter = chapters[i];

    if(current_chapter.id!=0){ //special case for arrival page
      //add submenu for the chapter
      $('#left-menu').append("<div id=left-menu-sub-"+current_chapter.id+" class='left-menu-sub' ></div>")
      //add case buttons in submenu
      for (var j=0;j<current_chapter.cases.length;j++){
        $("#left-menu-sub-"+current_chapter.id).append("<span id=left-case-"+current_chapter.cases[j].id+" class='left-case' title='"+current_chapter.cases[j].title+"'onclick=caseClick(\""+i+"\",\""+current_chapter.cases[j].id+"\");>" +current_chapter.cases[j].id.split('-')[1]+ "</span>");
        if(current_chapter.cases[j].has_dynamic_fig=="TRUE")
          $("#left-case-"+current_chapter.cases[j].id).addClass("left-dot-dynamic")
        add_tooltip("#left-menu-sub-"+current_chapter.id+" #left-case-"+current_chapter.cases[j].id);
      }
      $("#left-menu-sub-"+current_chapter.id).append('<p class="left-menu-cases-name">CASES</p>');
    }



    //add a chapter button, note that here onClick calls caseClick on the first case
    if (i==0) $('#left-menu').append("<span id=left-chapter-"+current_chapter.id+" class='left-chapter' title='"+current_chapter.title+"' onclick=caseClick(\""+i+"\","+0+");><i class='fas fa-circle'></span>");
    else{
      $('#left-menu').append("<span id=left-chapter-"+current_chapter.id+" class='left-chapter' title='"+current_chapter.title+"' onclick=caseClick(\""+i+"\","+0+");>" +current_chapter.id+ "</span>");
      for (var j=0;j<current_chapter.cases.length;j++){
        if(current_chapter.cases[j].has_dynamic_fig=="TRUE")
          $("#left-chapter-"+current_chapter.id).addClass("left-dot-dynamic")
      }
    }
    add_tooltip("#left-menu #left-chapter-"+current_chapter.id);

  }

  $('#left-menu').append('<p class="left-menu-name">'+"CHAPTERS"+'</p>');
  //back button when browsing a country
  if(data_loader.browsing_all_cases){
    $('#back-button-panel').hide();
  }
  else{
    $('#back-button-panel').show();
    //$('#back-button-panel').show();
  }


  //[left-menu] set the color on active chapter button
  $('#left-chapter-'+data_loader.active_case.chapter.id).css('background-color', 'hsl(129, 67%, 64%)')

  //[left-menu] display submenu of active chapter (and not others)
  $(".left-menu-sub").hide()
  $("#left-menu-sub-"+data_loader.active_case.chapter.id).show();

  //[left-menu] set the color on active case button
  $('#left-case-'+data_loader.active_case.id).css('background-color', 'hsl(129, 67%, 64%)')
}
function load_mechanism(){
    data_loader.mechanisms[Object.keys(data_loader.mechanisms)[0]].change_image();
    data_loader.mechanisms[Object.keys(data_loader.mechanisms)[0]].list_chapters_on_overlay();
}
