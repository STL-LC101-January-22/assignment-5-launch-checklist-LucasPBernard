// Write your JavaScript code here!
// const { formSubmission } = require("./scriptHelper");


// const { scriptHelper } = require("./scriptHelper");
window.addEventListener("load", function() {
   console.log('compiled');
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickPlanetFunction = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickPlanetFunction.name,pickPlanetFunction.diameter,pickPlanetFunction.star,pickPlanetFunction.distance,pickPlanetFunction.moons,pickPlanetFunction.image)
    })

    let list = document.getElementById("faultyItems");
    let missionTarget = document.getElementById('missionTarget');
    let testForm = document.querySelector("form");
    testForm.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let pilot = pilotName.value
      let copilotName = document.querySelector("input[name=copilotName]");
      let copilot = copilotName.value
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = fuelLevelInput.value
      let cargoLevelInput = document.querySelector("input[name=cargoMass]");
      let cargoLevel = cargoLevelInput.value
      
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
       
    });
   
});