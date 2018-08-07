# Character Sheet Generator

Character sheet generator generates a character sheet with random values per ability.

## Abilities

- strength
- agility
- charisma
- dexterity
- wisdom
- intelligence

## Spec

### Data structure

- Character is an object
    - Each ability is a key as an integer
    - Has a name key

```js
let character = {
    agility: 0
}
```

### Functionality

- Ability values are randomly generated at the start
- Abilities can not be less than 10 or greater than 20
- You start with 12 additional points to disperse
- You can name your character
- You can add points to an ability
  - Points are subtracted from the additional points
- You can remove points from an ability
  - Points are added to the additional points

## Future Features

- Characters will
  - battle each other
    - with items
    - with magic
  - heal each other
  - have inventory
  - trade