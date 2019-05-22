import Villain from '../villain'

export default class Magneto extends Villain {
  constructor() {
    super('Magneto');

    this.stats = {
      health: 100,
      intelligence: 90,
      strength: 60,
      speed: 60,
      accuracy: 10,
    };
    this.picture = '/pictures/magneto.jpg'

    this.superPowers.push({
      name: 'Master of Metals',
      description: 'Aaand it is flying to your face, 50% chance to hit 5 times stronger',
      attack: (basePoints) => (0.5 > Math.random) ? (basePoints * 5) : basePoints,
    })
  }
}
