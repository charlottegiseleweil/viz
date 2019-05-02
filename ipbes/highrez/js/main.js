// Control Panel
// Year toggle
var is2050 = false;

function switchYear(toggle) {
  is2050 = toggle;
  let scenarioRow = document.getElementById('scenario');
  if (is2050) {
    scenarioRow.style.opacity = '1';
    scenarioRow.style.transition = 'opacity 0.5s linear';
    scenarioRow.style.visibility = 'visible';
    document.querySelector("input[name='radio2']:checked").dispatchEvent(new Event('change'));
    document.getElementById('year-button-2015').classList.remove('selected');
    document.getElementById('year-button-2050').classList.add('selected');
  } else {
    scenarioRow.style.visibility = 'collapse';
    scenarioRow.style.opacity = '0';
    scenarioRow.style.transition = 'opacity 0.5s linear';
    scenarioRow.style.transition = 'visibility 0.15s linear';
    //plot_object.setScenario("c");
    document.getElementById('year-button-2015').classList.add('selected');
    document.getElementById('year-button-2050').classList.remove('selected');
  }
  updateMap(pickEcoshard());
};

// Mode toggle
var mode = 'UN';

function switchMode(toggle) {
  mode = toggle;
  let nutrientRow = document.getElementById('nutrient');
  if (mode == 'UN') {
    nutrientRow.style.opacity = '1';
    nutrientRow.style.transition = 'opacity 0.5s linear';
    nutrientRow.style.visibility = 'visible';
    document.querySelector("input[name='radio2']:checked").dispatchEvent(new Event('change'));
    document.getElementById('NC-button').classList.remove('selected');
    document.getElementById('UN-button').classList.add('selected');
  } else {
    nutrientRow.style.visibility = 'collapse';
    nutrientRow.style.opacity = '0';
    nutrientRow.style.transition = 'opacity 0.5s linear';
    nutrientRow.style.transition = 'visibility 0.15s linear';
    //plot_object.setScenario("c");
    document.getElementById('NC-button').classList.add('selected');
    document.getElementById('UN-button').classList.remove('selected');
  }
  updateMap(pickEcoshard());
};

//

var ecoshard = 'pollhab_2km_prop_on_ag_10s_ssp5_md5_48a6718435e58e9e67e39824005c4ad1';
// Link selection to ecoshard UGLIEST FUNCTION
function pickEcoshard(polli=true) {
  if (polli=true){
      if (mode == 'NC') {
        if (is2050) {
          if (document.getElementById("btnSSP1").checked) {
            ecoshard = 'pollsuff_on_ag_10s_ssp1_md5_c936c53a80471731fac0d6a6895628e8'
            //for test:
            //ecoshard = 'worldclim_2050_ssp1_n_export_compressed_md5_47c237fb127bc52cbb3228621cabe143'
          } else if (document.getElementById("btnSSP3").checked) {
            ecoshard = 'pollsuff_on_ag_10s_ssp3_md5_edf116e6020b6f88bb4c4e15741413ba'
          } else if (document.getElementById("btnSSP5").checked) {
            ecoshard = 'pollsuff_on_ag_10s_ssp5_md5_105a4ae2c2407344e0c1beaf8bbd529f'
          }
        } else {
          ecoshard = 'pollsuff_on_ag_10s_cur_md5_0c94931b5687e98fcf293b789afdd96e'
        }


      } else {
        if (is2050) {
          if (document.getElementById("btnSSP1").checked) {
            if (document.getElementById("btnNutrientNRJ").checked) {
              ecoshard = 'prod_poll_dep_unrealized_en_10s_ssp1_md5_2ae004b2e3559cdfc53ed754bfd6b33e';
            } else if (document.getElementById("btnNutrientFo").checked) {
              ecoshard = 'prod_poll_dep_unrealized_fo_10s_ssp1_md5_08c28442f699f35ab903b23480945785';
            } else if (document.getElementById("btnNutrientVitA").checked) {
              ecoshard = 'prod_poll_dep_unrealized_va_10s_ssp1_md5_d9b620961bfe56b7bfb52ee67babe364';
            };
          } else if (document.getElementById("btnSSP3").checked) {
            if (document.getElementById("btnNutrientNRJ").checked) {
              ecoshard = 'prod_poll_dep_unrealized_en_10s_ssp3_md5_10ce2f30db2ac4a97266cfd075e67fa9';
            } else if (document.getElementById("btnNutrientFo").checked) {
              ecoshard = 'prod_poll_dep_unrealized_fo_10s_ssp3_md5_19a2a1423c028e883a477e6b73524da5';
            } else if (document.getElementById("btnNutrientVitA").checked) {
              ecoshard = 'prod_poll_dep_unrealized_va_10s_ssp3_md5_0a6744d0b69ec295292a84c8383290d5';
            };
          } else if (document.getElementById("btnSSP5").checked) {
            if (document.getElementById("btnNutrientNRJ").checked) {
              ecoshard = 'prod_poll_dep_unrealized_en_10s_ssp5_md5_b5fb16243689850078961e0228f774f2';
            } else if (document.getElementById("btnNutrientFo").checked) {
              ecoshard = 'prod_poll_dep_unrealized_fo_10s_ssp5_md5_155e5e1aab3c226a693973efc41400fc';
            } else if (document.getElementById("btnNutrientVitA").checked) {
              ecoshard = 'prod_poll_dep_unrealized_va_10s_ssp5_md5_33e0cd5f3a846d1532a44c56c2d4ade5';
            };
          }
        } else {
          if (document.getElementById("btnNutrientNRJ").checked) {
            ecoshard = 'prod_poll_dep_unrealized_en_10s_cur_md5_d3e8bc025523d74cd4258f9f954b3cf4';
          } else if (document.getElementById("btnNutrientFo").checked) {
            ecoshard = 'prod_poll_dep_unrealized_fo_10s_cur_md5_857aa9c09357ad6614e33f23710ea380';
          } else if (document.getElementById("btnNutrientVitA").checked) {
            ecoshard = 'prod_poll_dep_unrealized_va_10s_cur_md5_c8035666f5a6e5c32fb290df989183e2';
          }
        };
      }
  }
  else {
      // Links to WQ things here?
  }   
  return ecoshard;
};