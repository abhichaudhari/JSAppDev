let chance = new (require('chance'));

let character = require('./character');

let characterKeys = Object.keys(character.character.abilities);

/* let generateCharactername = (character) => {
    character.name = chance.name();
}; */

//Get a random integer between `min` and `max`.
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let populateCharacter = (character, characterKeys, name, min, max) => {
    character.name = name;
    for (i=0; i<characterKeys.length; i++){
        character.abilities[characterKeys[i]] = randomInt(min, max);
    }
}

let displayCharacter = (character, characterKeys, min, max) => {
    generateCharactername(character);
    populateCharacter(character, characterKeys, min, max);
    return character;
};


let availablePoints = 12;

let addPointsToAbility = (character, points, ability) => {

    let propertyValue = character.abilities[ability];
    if (propertyValue) {
        
        let maxSpend = 20 - propertyValue;
        
        if(points<maxSpend){
            let spend = points;
        }else{
            spend = maxSpend;
        };

        console.log(propertyValue, spend);
        if (availablePoints >= spend) {
            character.abilities[ability] += spend;
            availablePoints -= spend;
        }else{
            console.log("Insufficient points available to spend");
        }
    }
    console.log("Available Points = ", availablePoints);
};


let removePointsFromAbility = (character, points, ability) => {
    
    let propertyValue = character.abilities[ability];
    if (propertyValue) {
        
        let maxTakeAway = propertyValue - 10;

        if(points<maxTakeAway) {
            character.abilities[ability] -= points;
            availablePoints += points;
        }else{
            character.abilities[ability] -= maxTakeAway;
            availablePoints += maxTakeAway;
        };
    }
    console.log("Available Points = ", availablePoints);
};


module.exports = {
    generateCharactername: generateCharactername,
    randomInt: randomInt,
    populateCharacter: populateCharacter,
    availablePoints: availablePoints,
    addPointsToAbility: addPointsToAbility,
    removePointsFromAbility: removePointsFromAbility,
    displayCharacter: displayCharacter
}