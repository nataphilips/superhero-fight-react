import uuidv4 from 'uuid/v4';

export default class Superhuman {
  constructor(name) {
    this.name = name;
    this.chosen = false;
    this.id = uuidv4();
    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 100,
    };
  }

  attack() {
    return this.stats.strength;
  }

  defend() {
    return this.stats.durability;
  }

  attacks(character) {
    let result = '';

    if (!(character instanceof Superhuman)) {
      result = this.name + ' cannot attack anything';
    } else {
      let damage = 10;
      let health = character.stats.health;
      character.stats.health = health - damage;
      result = this.name + ' attacked ' + character.name + ' and his health is now ' + character.stats.health;
    }

    return result;
  }
}
