"use strict";

const Human = require("./human");
const Shirt = require("./shirt");

let human1 = new Human();
let human2 = new Human();

human1.dress(new Shirt("Beautiful blue shirt"));

console.log("human1 :");
human1.displayOrganNames();
human1.displayClotheNames();

console.log("human2 :");
human2.displayOrganNames();
human2.displayClotheNames();

human2.extractOrgan();
human2.transplant(human1.extractOrgan());
console.log("human2 after transplant:");
human2.displayOrganNames();
human2.displayClotheNames();
