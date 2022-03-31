// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");
// const { scriptHelper } = require("./scriptHelper");
window.addEventListener("load", function() {
   console.log('compiled');
   let listedPlanets =[];
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

    let testForm = document.querySelector("form");
    console.log(testForm);
    //console.log(testForm)
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
      let list = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus')
      let launchStatus = document.getElementById('launchStatus')
      let missionTarget = document.getElementById('missionTarget');
      let someNull = false;
      let someInvalid = false;

      console.log('hello')

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
      
      
      if (validateInput(pilot) === "Is a Number") {
        list.setAttribute('style','visibility:visible');
        pilotStatus.innerHTML = `Pilot ${pilot} is not ready for launch`;
      }
      if (validateInput(pilot) === "Not a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      }
      if (validateInput(copilot) === "Is a Number") {
        list.setAttribute('style','visibility:visible');
        copilotStatus.innerHTML = `copilot ${copilot} is not ready for launch`;
      }
      if (validateInput(copilot) === "Not a Number") {
        copilotStatus.innerHTML = `copilot ${copilot} is ready for launch`;
      }
      if (validateInput(fuelLevel) === "Is a Number") {
        fuelLevel = Number(fuelLevel);
        if (fuelLevel<10000){
          list.setAttribute('style','visibility:visible');
          fuelStatus.innerHTML = "Fuel level too low for launch";
          launchStatus.setAttribute('style', 'color:rgb(199, 37, 78')
          launchStatus.innerHTML = "Shuttle not ready for launch";
        }
        
      }
      if (validateInput(cargoLevel) === "Is a Number") {
        cargoLevel = Number(cargoLevel);
        if (cargoLevel>10000){
          list.setAttribute('style','visibility:visible');
          cargoStatus.innerHTML = "Cargo mass too high for launch";
          launchStatus.setAttribute('style', 'color:rgb(199, 37, 78')
          launchStatus.innerHTML = "Shuttle not ready for launch";
        }
    }
        if (validateInput(fuelLevel) === "Is a Number") {
            fuelLevel = Number(fuelLevel);
            if (fuelLevel>10000){
              fuelStatus.innerHTML = "Fuel level high enough for launch";
            }
            
          }
          if (validateInput(cargoLevel) === "Is a Number") {
            cargoLevel = Number(cargoLevel);
            if (cargoLevel<10000){
              cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }  
        
      }
      if (validateInput(pilot) === "Null"||validateInput(copilot) === "Null"||validateInput(fuelLevel) === "Null"||validateInput(cargoLevel) === "Null") {
        alert("All fields are required!");
        someNull = true
      }
      if (validateInput(cargoLevel) === "Not a Number"|| validateInput(fuelLevel) === "Not a Number"||validateInput(pilot) === "Is a Number"||validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        someInvalid = true
      }
      if (pilotStatus.innerHTML === `Pilot ${pilot} is ready for launch`&&copilotStatus.innerHTML === `copilot ${copilot} is ready for launch`&&fuelStatus.innerHTML === "Fuel level high enough for launch"&&cargoStatus.innerHTML=== "Cargo mass low enough for launch"&& !someNull&&!someInvalid) {
          console.log('ready for launch')
          list.setAttribute('style','visibility:visible');
          launchStatus.setAttribute('style','color:rgb(65,159,106)');
          launchStatus.innerHTML = "Shuttle ready for launch";
          missionTarget.innerText = "INSTALLING SUPER INVASIVE SPYWARE..."
          missionTarget.style.color = 'red';
          missionTarget.style.fontSize = '50px'


      }
      
       
    });
   
});