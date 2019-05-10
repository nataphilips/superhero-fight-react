import Superhero from '../superhero'

export default class Thor extends Superhero {
  constructor() {
    super('Thor');
    this.health = 100;
    this.intelligence = 85;
    this.strength = 100;
    this.speed = 85;
    this.durability = 100;
    this.power = 100;
    this.combat = 100
  }
}
