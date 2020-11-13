import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { feed, sleep, play, newTamagotchi, tamagotchiArray } from "./js/tamagotchi.js";


$(document).ready(function() {
  let currentTamagotchi = 0;
  $("#new-tamagotchi").click(function() {
    const newName = $("#tamagotchi-name").val();
    //const imgLink = $("#tamagotchi-image").val();
    const newhtml = newTamagotchi(newName);
    $("#your-tamagotchis").append(`<li>${newhtml}</li>`);
    $("#tamagotchi-name").val("");
  });

  $("ul#your-tamagotchis").on("click", "button.next-tamagotchi", function() {
    currentTamagotchi = this.value;
    //#current-tamagotchi-img").text(tamagotchiArray[currentTamagotchi].Image);
    const tama = tamagotchiArray[currentTamagotchi]();
    $("#current-tamagotchi-name").text(tama.Name);
    //const currentState = tamagotchiArray[currentTamagotchi].stateControl;
    $("#food-value").text(`Food: ${tama.food}`);
    $("#rest-value").text(`Rest: ${tama.rest}`);
    $("#play-value").text(`Play: ${tama.play}`);
  });

  //Food
  $("#feed").click(function() {
    const newState = tamagotchiArray[currentTamagotchi](feed);
    $("#food-value").text(`Food: ${newState.food}`);
  });

  // storeControl() = calls the state
  // storeControl().food = access the state of the food
  //storeState contains the state of the tamagotchi

  //Sleep
  $("#sleep").click(function () {
    const newState = tamagotchiArray[currentTamagotchi](sleep);
    $("#rest-value").text(`Rest: ${newState.rest}`);
  });

  //Play
  $("#play").click(function () {
    const newState = tamagotchiArray[currentTamagotchi](play);
    $("#play-value").text(`Play: ${newState.play}`);
  });

});



