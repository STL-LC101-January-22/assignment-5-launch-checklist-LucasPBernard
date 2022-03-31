// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

let myHTML = `  <h2>Mission Destination</h2>
  <ol>
      <li>Name: </li>
      <li>Diameter: </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: </li>
      <li>Number of Moons: </li>
  </ol>
  <img src="">`

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

let testInput = null
function validateInput(testInput) {
  if (testInput===null||testInput==='') {
    return "Null"
  } else if (isNaN(testInput)) {
    return "Not a Number"
  } else if (!isNaN(testInput)) {
    return "Is a Number"
  }
}
//console.log(validateInput(76678))


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log('formSubmission')

 
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });
console.log(planetsReturned)
    return planetsReturned;
}

function pickPlanet(planets) {
console.log('pickPlanet')
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
