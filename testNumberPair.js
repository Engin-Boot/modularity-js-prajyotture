const expect = require('chai').expect;
const x=require("./GetNumberPair");
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
function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = x.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

exports.testNumberToPair=testNumberToPair;