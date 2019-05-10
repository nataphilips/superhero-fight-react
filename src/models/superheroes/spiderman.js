import Superhero from '../superhero'

export default class Spiderman extends Superhero {
  constructor() {
    super('Spiderman');
    this.health = 100;
    this.intelligence = 100;
    this.strength = 55;
    this.speed = 70;
    this.durability = 75;
    this.power = 75;
    this.combat = 95
  }
}
