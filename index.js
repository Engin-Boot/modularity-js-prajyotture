//Prajyot
const expect = require('chai').expect;
const t=require("./testColorNumber");
const m=require("./testNumberPair");
const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];

const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];

console.log("color coder");
m.testNumberToPair(4, "white", "brown");
m.testNumberToPair(25, "violet", "slate");
t.testColorToNumber("black", "brown", 14);
t.testColorToNumber("yellow", "green", 18);







