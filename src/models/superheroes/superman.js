import Superhero from '../superhero'

export default class Superman extends Superhero {
  constructor() {
    super('Superman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 85,
    };
    this.picture = '/pictures/superman.jpg'
  }
}
