const reverseString = function(input) {
    let arr = [];
    for (let i = input.length - 1; i >= 0; --i) {
        arr.push(input.at(i));
    }

    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
