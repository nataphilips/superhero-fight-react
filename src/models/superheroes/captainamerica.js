import Superhero from '../superhero'

export default class CaptainAmerica extends Superhero {
  constructor() {
    super('Captain America');

    this.stats = {
      health: 100,
      intelligence: 85,
      strength: 20,
      speed: 40,
      durability: 55,
      power: 60,
      combat: 100,
    };
    this.picture = '/pictures/captain-america.jpg'
  }
}
