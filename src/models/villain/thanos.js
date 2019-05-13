import Villain from '../villain'

export default class Thanos extends Villain {
  constructor() {
    super('Thanos');
    this.health = 100;
    this.intelligence = 100;
    this.strength = 100;
    this.speed = 100;
    this.durability = 100;
    this.power = 100;
    this.combat = 80;
  }
}
