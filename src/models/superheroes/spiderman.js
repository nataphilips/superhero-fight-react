import Superhero from '../superhero'

export default class Spiderman extends Superhero {
  constructor() {
    super('Spiderman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 55,
      speed: 70,
      accuracy: 10,
    };
    this.picture = '/pictures/spiderman.jpg'

    this.superPowers.push({
      name: 'Spider Web',
      description: 'Has additional 20% chance to dodge ',
      dodge: (basePoints) => (basePoints + 0.2),
    })
  }
}
