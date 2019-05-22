import Villain from '../villain'

export default class Loki extends Villain {
  constructor() {
    super('Loki');

    this.stats = {
      health: 100,
      intelligence: 95,
      strength: 80,
      speed: 60,
      accuracy: 10,
    };
    this.picture = '/pictures/loki.jpg';

    this.superPowers.push({
      name: 'Master of Magic',
      description: 'Has additional 50% chance to dodge',
      dodge: (basePoints) => (basePoints + 0.5),
    })
  }
}
