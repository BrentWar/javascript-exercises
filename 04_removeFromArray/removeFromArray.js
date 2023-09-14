const removeFromArray = function(arr, ...items) {
    let arr2 = arr;
    for (let i = 0; i < items.length; ++i) {
        arr2 = arr2.filter(function (element) {
            return element !== items[i];
        })
    }

    return arr2;

};

// Do not edit below this line
module.exports = removeFromArray;
