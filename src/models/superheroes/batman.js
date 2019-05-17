import Superhero from '../superhero'

export default class Batman extends Superhero {
  constructor() {
    super('Batman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 20,
      speed: 30,
      durability: 50,
      power: 50,
      combat: 100,
    };
    this.picture = '/pictures/batman.jpg'
  }
}
