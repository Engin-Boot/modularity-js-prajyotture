const expect = require('chai').expect;
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

function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / MinorColors.length);
    colorPair.major = MajorColors[majorColorIndex];
    colorPair.minor = MinorColors[zeroBasedPairNumber % MinorColors.length];
    return colorPair
}


exports.GetColorFromPairNumber=GetColorFromPairNumber;
//module.export=GetPairNumberFromColors;