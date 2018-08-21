let chance = new (require('chance'));
let generator = require('./generator');

let character = {
    name: null,
    abilities: {
        strength: 0,
        agility: 0,
        charisma: 0,
        dexterity: 0,
        wisdom: 0,
        intelligence: 0
    }
}

character.name = chance.name();
console.log(character.abilities);

let characterKeys = Object.keys(character.abilities);

generator.populateCharacter(character, characterKeys, 10, 20);

console.log(character);

//console.log("Available Points = ", generator.availablePoints);

console.log("Executing addPointsToAbility");
//console.log("Available Points = ", generator.availablePoints);
console.log("Points to be added = 10 for ability agility");
generator.addPointsToAbility(character, 10, "agility");
console.log(character);
//console.log("Available Points = ", generator.availablePoints);

console.log("Executing removePointsFromAbility");
//console.log("Available Points = ", generator.availablePoints);
console.log("Points to be removed = 5 from ability charisma");
generator.removePointsFromAbility(character, 5, "charisma");
console.log(character);
//console.log("Available Points = ", generator.availablePoints);


module.exports = {
    character: character
}