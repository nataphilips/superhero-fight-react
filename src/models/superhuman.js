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
    return this.stats.strength * (this.stats.health / 100);
  }

  canDodge(attacker) {
    if (this.stats.speed > attacker.stats.speed) {
      const probabilityOfDodge = 1 - (attacker.stats.speed / this.stats.speed)
      return probabilityOfDodge > Math.random()
    }
  }
}
