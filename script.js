// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { scriptHelper } = require("./scriptHelper");
//const scriptHelper = require("./scriptHelper.js");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions
        // to pick a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets);
        addDestinationInfo(document, destination["name"], destination["diameter"],
            destination["star"], destination["distance"], destination["moons"], destination["image"]);
    });
    let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                console.log(document.querySelector("div#faultyItems ol"));
                formSubmission(document, 
                    document.querySelector("div#faultyItems ol"), 
                    document.querySelector("input[name=pilotName]"), 
                    document.querySelector("input[name=copilotName]"), 
                    document.querySelector("input[name=fuelLevel]"), 
                    document.querySelector("input[name=cargoLevel]"));
            });

});