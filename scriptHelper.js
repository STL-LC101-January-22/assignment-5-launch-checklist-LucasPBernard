// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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


window.addEventListener("load", function() {
  let testForm = document.querySelector("form");
  //console.log(testForm)
  testForm.addEventListener("submit", function(event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot =pilotName.value
    console.log(pilot)

    if (validateInput(pilot) === "Null" || validateInput(pilot) === "Is a Number") {
        alert("All fields are required!");
     }
     event.preventDefault()
  });
});

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
