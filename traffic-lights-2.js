"use strict";

const trafficLight2 = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
    const currentState = trafficLight2.possibleStates[trafficLight2.stateIndex];
    console.log("The traffic light is on", currentState);


    if (currentState === "green") {
    trafficLight2.stateIndex = 1;
    } else if (currentState === "orange") {
    trafficLight2.stateIndex = 2; 
    } else if (currentState === "red") {
    trafficLight2.stateIndex = 0; 
    cycle++;
    }
}


