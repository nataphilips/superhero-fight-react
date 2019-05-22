import Villain from '../villain'

export default class Mystique extends Villain {
  constructor() {
    super('Mystique');

    this.stats = {
      health: 100,
      intelligence: 90,
      strength: 15,
      speed: 25,
      accuracy: 10,
    };
    this.picture = '/pictures/mystique.jpg'

    this.superPowers.push({
      name: 'Turnskin',
      description: 'Has additional 50% chance to dodge',
      dodge: (basePoints) => (basePoints + 0.5),
    })
  }
}
