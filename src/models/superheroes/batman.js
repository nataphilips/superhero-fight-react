import Superhero from '../superhero'

export default class Batman extends Superhero {
  constructor() {
    super('Batman');
    this.health = 100;
    this.intelligence = 100;
    this.strength =20;
    this.speed = 30;
    this.durability = 50;
    this.power = 50;
    this.combat = 100
  }
}
