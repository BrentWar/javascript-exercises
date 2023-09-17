const palindromes = function (a) {
    let lowercase = a.toLowerCase();
    let arrayA = lowercase.split("");
    arrayA = arrayA.filter(element => (element !== "!" && element !== " " && element !== "," && element !== "."));
    let palindrome = true;
    for (let i = 0; i < Math.floor(arrayA.length / 2); ++i) {
        if (arrayA[i] !== arrayA[arrayA.length - 1 - i]) {
            palindrome = false;
        }
    }

    return palindrome;

};

// Do not edit below this line
module.exports = palindromes;
