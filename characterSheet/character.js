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

module.exports = {
    character: character
}