const repeatString = function(inputString, numOfStrings) {
    let outputString = "";
    if (numOfStrings < 0) {
        outputString = "ERROR"
    }
    for (let i = 0; i < numOfStrings; ++i) {
        outputString += inputString;
    }

    return outputString;

};

// Do not edit below this line
module.exports = repeatString;
