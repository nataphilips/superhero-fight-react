import Superhero from '../superhero'

export default class Superman extends Superhero {
  constructor() {
    super('Superman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      accuracy: 10,
    };
    this.picture = '/pictures/superman.jpg'

    this.superPowers.push({
      name: 'X-ray vision',
      description: '40% to accuracy',
      accuracy: (basePoints) => basePoints + 40,
    })
  }
}
