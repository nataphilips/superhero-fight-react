import Villain from '../villain'

export default class Joker extends Villain {
  constructor() {
    super('Joker');
    this.health = 100;
    this.intelligence = 100;
    this.strength = 10;
    this.speed = 15;
    this.durability = 60;
    this.power = 45;
    this.combat = 70;
  }
}
