// Write your helper functions here!
//const fetch = 
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

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

    if (validateInput(pilot) === "Empty"
        || validateInput(copilot) === "Empty"
        || validateInput(fuelLevel) === "Empty"
        || validateInput(cargoLevel) === "Empty") {
        alert("You must complete all fields.");
        return;
    }

    if (validateInput(pilot) === "Is a Number"
        || validateInput(copilot) === "Is a Number") {
        alert("Pilot and copilot names must be non-numeric text.");
        return;
    }

    if (validateInput(fuelLevel) === "Not a Number"
        || validateInput(cargoLevel) === "Not a Number") {
        alert("Fuel level and cargo level must be numbers.");
        return;
    }


    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.setAttribute("style", "visibility: visible");

    if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").setAttribute("style", "color: rgb(199, 37, 78)");
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    }

    else if (fuelLevel < 10000 && cargoLevel <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").setAttribute("style", "color: rgb(199, 37, 78)");
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    }

    else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").setAttribute("style", "color: rgb(199, 37, 78)");
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }

    else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").setAttribute("style", "color: rgb(65, 159, 106)");
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
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