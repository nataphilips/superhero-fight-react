import Villain from '../villain'

export default class Loki extends Villain {
  constructor() {
    super('Loki');
    this.health = 100;
    this.intelligence =95;
    this.strength = 65;
    this.speed = 50;
    this.durability = 85;
    this.power = 100;
    this.combat = 60;
  }
}
