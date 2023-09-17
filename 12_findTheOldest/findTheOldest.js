const findTheOldest = function(a) {

    function reducer(curOld, person) {
        let birthYear = person.yearOfBirth;
        let deathYear = 0;
        let olderDeathYear = 0;
        let olderBirthYear = curOld.yearOfBirth;
        if (!("yearOfDeath" in person)) {
            let today = new Date();
            deathYear = today.getFullYear();
        } 
        else {
            deathYear = person.yearOfDeath;
        }

        if (!("yearOfDeath" in curOld)) {
            let today = new Date();
            olderDeathYear = today.getFullYear();
        } 
        else {
            olderDeathYear = curOld.yearOfDeath;
        }

        if (olderDeathYear - olderBirthYear < deathYear - birthYear) {
            return person;
        } 
        else {
            return curOld;
        }
    }

    return a.reduce(reducer);
};

// Do not edit below this line
module.exports = findTheOldest;
