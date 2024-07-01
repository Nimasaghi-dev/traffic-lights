"use strict";

const trafficLight2 = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
    const currentState = trafficLight2.possibleStates[trafficLight2.stateIndex];
    console.log("The traffic light is on", currentState);

  // Update the stateIndex based on the current state
    if (currentState === "green") {
    trafficLight2.stateIndex = 1; // Turn it orange
    } else if (currentState === "orange") {
    trafficLight2.stateIndex = 2; // Turn it red
    } else if (currentState === "red") {
    trafficLight2.stateIndex = 0; // Turn it green
    cycle++; // Increment cycle count
    }
}


