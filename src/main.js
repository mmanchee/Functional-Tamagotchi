import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "./js/tamagotchi.js";

$(document).ready(function() {
  $("#new-tamagotchi").click(function() {
    const newName = $("#tamagotchi-name").val();
    const imgLink = $("#tamagotchi-image").val();
    const newhtml = newTamagotchi(newName, imgLink);
    $("#your-tamagotchi").append(`<li>${newhtml}</li>`);
  });

  $("ul#your-tamagotchi").on("click", function() {
    currentTamagotchi = this.value;
    $("#current-tamagotchi-name").text(tamagotchiArray[currentTamagotchi].Name);
    $("#current-tamagotchi-img").text(tamagotchiArray[currentTamagotchi].Image);
    //const currentState = tamagotchiArray[currentTamagotchi].stateControl;
    // talk with Travis
    const currentFood = currentState(stat1).food;
    const currentRest = currentState(stat2).rest;
    const currentPlay = currentState(stat3).play;
    $("#food-value").text(`Food: ${currentFood}`)
    $("#rest-value").text(`Rest: ${currentRest}`)
    $("#play-value").text(`Play: ${currentPlay}`)
  })

  //Food
  $("#feed").click(function() {
    const newState = tamagotchiArray[currentTamagotchi].stateControl(feed);
    $("#food-value").text(`Food: ${newState.food}`);
  });

  //Sleep
  $("#sleep").click(function () {
    const newState = tamagotchiArray[currentTamagotchi].stateControl(sleep);
    $("#rest-value").text(`Rest: ${newState.rest}`);
  });

  //Play
  $("#play").click(function () {
    const newState = tamagotchiArray[currentTamagotchi].stateControl(play);
    $("#play-value").text(`Play: ${newState.play}`);
  });

});



