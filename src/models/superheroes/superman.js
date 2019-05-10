import Superhero from '../superhero'

export default class Superman extends Superhero {
  constructor() {
    super('Superman');
    this.health = 100;
    this.intelligence = 100;
    this.strength = 100;
    this.speed = 100;
    this.durability = 100;
    this.power = 100;
    this.combat = 85
  }
}
