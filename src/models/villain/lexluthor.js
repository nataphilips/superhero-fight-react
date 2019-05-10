import Villain from '../villain'

export default class LexLuthor extends Villain {
  constructor() {
    super('LexLuthor');
    this.health = 100;
    this.intelligence = 100;
    this.strength = 10;
    this.speed = 15;
    this.durability = 20;
    this.power = 20;
    this.combat = 50;
  }
}
