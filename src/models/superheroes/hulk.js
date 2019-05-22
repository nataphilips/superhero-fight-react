import Superhero from '../superhero'

export default class Hulk extends Superhero {
  constructor() {
    super('Hulk');

    this.stats = {
      health: 100,
      intelligence: 95,
      strength: 100,
      speed: 65,
      accuracy: 10,
    }

    this.picture = '/pictures/hulk.jpg'

    this.superPowers.push({
      name: 'Hulk Smash',
      description: 'Like Khabib, but 30% of time',
      attack: (basePoints) => (0.3 > Math.random) ? (basePoints * 2) : basePoints,
    })
  }
}
