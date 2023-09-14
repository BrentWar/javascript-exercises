const leapYears = function(year) {
    let condition = false;

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        condition = true;
    }

    return condition;
};

// Do not edit below this line
module.exports = leapYears;
