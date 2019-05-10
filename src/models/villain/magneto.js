import Villain from '../villain'

export default class Magneto extends Villain {
  constructor() {
    super('Magneto');
    this.health = 100;
    this.intelligence = 90;
    this.strength = 40;
    this.speed = 60;
    this.durability = 80;
    this.power = 85;
    this.combat = 70;
  }
}
