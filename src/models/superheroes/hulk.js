import Superhero from '../superhero'

export default class Hulk extends Superhero {
  constructor() {
    super('Hulk');
    this.health = 100;
    this.intelligence = 95;
    this.strength = 100;
    this.speed = 65;
    this.durability = 100;
    this.power = 100;
    this.combat = 85
  }
}
