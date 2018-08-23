
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

const form = document.getElementById('form');
const characterName = document.getElementById('name');
const min = document.getElementById('min');
const max = document.getElementById('max');
const submitButton = document.getElementById('submit');
const characterList = document.getElementById('characterList');

//generator.generateCharactername(character);

let characterKeys = Object.keys(character.abilities);

generator.populateCharacter(character, characterKeys, characterName, min, max);

//generator.addPointsToAbility(character, 10, "agility");

//generator.removePointsFromAbility(character, 5, "charisma");

let charactersArray = localStorage.getItem('characters') ? JSON.parse(localStorage.getItem('characters')) : [];

localStorage.setItem('characters', JSON.stringify(charactersArray));

const data = JSON.parse(localStorage.getItem('characters'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    charactersArray.push(character);
    localStorage.setItem('characters', JSON.stringify(charactersArray));
  });

characterList.innerHTML = localStorage;

module.exports = {
    character: character
}