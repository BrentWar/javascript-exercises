const getTheTitles = function(a) {
    let bookTitles = [];
    a.forEach(element => {
        bookTitles.push(element.title);
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
