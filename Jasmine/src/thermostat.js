//file:///Users/Student/Documents/projects/jsting/Java_Fizz_Buzz/Jasmine/SpecRunner.html
'use strict';
var temperature = 20;

function upTemp() {
  temperature += 1;
  refreshTemp();
}
function downTemp() {
  if(tooCold() === false) {
    temperature -= 1;
  }
  refreshTemp();
}
function refreshTemp() {
  document.getElementById("tempLabel").innerHTML = "Temperature: " + temperature;
}

function tooCold() {
  if(temperature <= 10) {
    alert("TOo C0LD");
    return true
  }
  else {
    return false
  }
}
