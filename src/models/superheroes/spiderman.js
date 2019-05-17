import Superhero from '../superhero'

export default class Spiderman extends Superhero {
  constructor() {
    super('Spiderman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 55,
      speed: 70,
      durability: 75,
      power: 75,
      combat: 95,
    };
    this.picture = '/pictures/spiderman.jpg'
  }
}
