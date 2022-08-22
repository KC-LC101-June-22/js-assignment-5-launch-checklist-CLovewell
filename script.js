// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { scriptHelper } = require("./scriptHelper");
//const scriptHelper = require("./scriptHelper.js");

window.addEventListener("load", function () {

    this.document.getElementById("faultyItems").setAttribute("style", "visibility: hidden");
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // Below this comment call the appropriate helper functions
        // to pick a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets);
        addDestinationInfo(document, destination["name"], destination["diameter"],
            destination["star"], destination["distance"], destination["moons"], destination["image"]);
    });
    let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                formSubmission(document, 
                    document.querySelector("div#faultyItems"), 
                    document.querySelector("input[name=pilotName]").value, 
                    document.querySelector("input[name=copilotName]").value, 
                    document.querySelector("input[name=fuelLevel]").value, 
                    document.querySelector("input[name=cargoMass]").value);
            });

});