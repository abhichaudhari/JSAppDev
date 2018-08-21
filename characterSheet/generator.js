//Get a random integer between `min` and `max`.
let character = require('./character');

let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let populateCharacter = (object, objectKeys, min, max) => {
    for (i=0; i<objectKeys.length; i++){
        object.abilities[objectKeys[i]] = randomInt(min, max);
    }
}

let availablePoints = 12;

let addPointsToAbility = (object, points, ability) => {

    let propertyValue = object.abilities[ability];
    if (propertyValue) {
        
        let maxSpend = 20 - propertyValue;
        
        if(points<maxSpend){
            let spend = points;
        }else{
            spend = maxSpend;
        };

        console.log(propertyValue, spend);
        if (availablePoints >= spend) {
            object.abilities[ability] += spend;
            availablePoints -= spend;
        }else{
            console.log("Insufficient points available to spend");
        }
    }
    console.log("Available Points = ", availablePoints);
};


let removePointsFromAbility = (object, points, ability) => {
    
    let propertyValue = object.abilities[ability];
    if (propertyValue) {
        
        let maxTakeAway = propertyValue - 10;

        if(points<maxTakeAway) {
            object.abilities[ability] -= points;
            availablePoints += points;
        }else{
            object.abilities[ability] -= maxTakeAway;
            availablePoints += maxTakeAway;
        };
    }
    console.log("Available Points = ", availablePoints);
};


module.exports = {
    randomInt: randomInt,
    populateCharacter: populateCharacter,
    availablePoints: availablePoints,
    addPointsToAbility: addPointsToAbility,
    removePointsFromAbility: removePointsFromAbility
}