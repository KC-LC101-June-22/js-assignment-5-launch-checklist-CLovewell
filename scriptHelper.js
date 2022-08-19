// Write your helper functions here!
require('isomorphic-fetch');

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
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =
        `<h2>Mission Destination</h2>
         <ol>
             <li>Name: ${name}</li>
             <li>Diameter: ${diameter}</li>
             <li>Star: ${star}</li>
             <li>Distance from Earth: ${distance}</li>
             <li>Number of Moons: ${moons}</li>
         </ol>
         <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (Number.isNaN(Number(testInput))) {
        return "Not a Number";
    }
    else return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;

    if (fuelLevel.value < 10000 || cargoLevel.value > 10000) {
        list.setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").setAttribute("style", "color: rgb(199, 37, 78)");

        if (cargoLevel.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        }

        if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        }

    }
    else {
        list.setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").setAttribute("style", "color: green");
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch(
        "https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

/*
module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch
}
*/