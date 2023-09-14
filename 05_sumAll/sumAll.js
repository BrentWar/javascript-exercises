const sumAll = function(start, end) {
    let sum = 0;
    let small;
    let large;


    if (typeof(start) !== "number" || typeof(end) !== "number" || start < 0 || end < 0) {
        return "ERROR";
    }

    if (start < end) {
        small = start;
        large = end;
    }
    else {
        large = start;
        small = end;
    }

    for (let i = small; i <= large; ++i) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
