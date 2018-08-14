//Get a random integer between `min` and `max`.
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let populateCharacter = (object, objectKeys, min, max) => {
    for (i=0; i<objectKeys.length; i++){
        object.abilities[objectKeys[i]] = randomInt(min, max);
    }
}

module.exports = {
    randomInt: randomInt,
    populateCharacter: populateCharacter
}