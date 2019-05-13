import Superhero from '../superhero'

export default class CaptainAmerica extends Superhero {
  constructor() {
    super('CaptainAmerica');
    this.health = 100;
    this.intelligence = 85;
    this.strength =20;
    this.speed = 40;
    this.durability = 55;
    this.power = 60;
    this.combat = 100
  }
}
