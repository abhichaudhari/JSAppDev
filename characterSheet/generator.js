let Chance = require('chance'),
    chance = new Chance();

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
//console.log(chance.name());

let characterKeys = Object.keys(character.abilities);

//Get a random integer between `min` and `max`.
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (i=0; i<characterKeys.length; i++){
    character.abilities[characterKeys[i]] = randomInt(10, 20);
}
console.log(character);
