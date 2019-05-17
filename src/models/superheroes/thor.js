import Superhero from '../superhero'

export default class Thor extends Superhero {
  constructor() {
    super('Thor');

    this.stats = {
      health: 100,
      intelligence: 85,
      strength: 100,
      speed: 85,
      durability: 100,
      power: 100,
      combat: 100,
    };
    this.picture = '/pictures/thor.jpg'
  }
}
