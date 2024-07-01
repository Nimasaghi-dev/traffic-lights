"use strict";

const trafficLight = {
    state: "green",
};

let rotations = 0;
while (rotations < 2) {
    console.log("The traffic light is on", trafficLight.state);

    if (trafficLight.state === "green") {
        trafficLight.state = "orange";
    } else if (trafficLight.state === "orange") {
        trafficLight.state = "red";
    } else if (trafficLight.state === "red") {
        trafficLight.state = "green";
        rotations++;
    };
};
