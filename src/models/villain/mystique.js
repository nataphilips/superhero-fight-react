import Villain from '../villain'

export default class Mystique extends Villain {
  constructor() {
    super('Mystique');
    this.health = 100;
    this.intelligence = 90;
    this.strength = 15;
    this.speed = 25;
    this.durability = 65;
    this.power = 65;
    this.combat = 75;
  }
}
