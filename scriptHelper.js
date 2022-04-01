// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
let myHTML = document.getElementById('missionTarget')
 myHTML.innerHTML = `  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src=${imageUrl}>`

}

let testInput = null
function validateInput(testInput) {
  if (testInput===null||testInput==='') {
    return "Empty"
  } else if (isNaN(testInput)) {
    return "Not a Number"
  } else if (!isNaN(testInput)) {
    return "Is a Number"
  }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus')
  let launchStatus = document.getElementById('launchStatus')
  console.log(list)
  if (validateInput(pilot)==='Empty' || validateInput(copilot)==='Empty'||validateInput(fuelLevel)==='Empty'||validateInput(cargoLevel)==='Empty') {
    alert('All fields are required!');
  }
  if (validateInput(pilot)==="Is a Number"||validateInput(copilot)==="Is a Number"||validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number") {
    alert("Make sure to enter valid information for each field!");
  }
  
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    if (fuelLevel<10000){
      list.setAttribute('style','visibility:visible');
      fuelStatus.innerHTML = "Fuel level too low for launch";
      //launchStatus.style.color = rgb(199, 37, 78)
      launchStatus.setAttribute('style', 'color:rgb(199, 37, 78')
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else if (cargoLevel>=10000){
      list.setAttribute('style','visibility:visible');
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.setAttribute('style', 'color:rgb(199, 37, 78')
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else {
      (pilotStatus.innerHTML === `Pilot ${pilot} is ready for launch`&&copilotStatus.innerHTML === `Co-pilot ${copilot} is ready for launch`&&fuelStatus.innerHTML === "Fuel level high enough for launch"&&cargoStatus.innerHTML=== "Cargo mass low enough for launch") 
        console.log('ready for launch')
        list.setAttribute('style','visibility:visible');
        launchStatus.setAttribute('style','color:rgb(65,159,106)');
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } 
 
}


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
        })
    return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random()*planets.length);
  return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
