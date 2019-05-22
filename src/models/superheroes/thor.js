import Superhero from '../superhero'

export default class Thor extends Superhero {
  constructor() {
    super('Thor');

    this.stats = {
      health: 100,
      intelligence: 85,
      strength: 100,
      speed: 85,
      accuracy: 10,
    };
    this.picture = '/pictures/thor.jpg'

    this.superPowers.push({
      name: 'Hammer',
      description: '40% bonus to attack',
      attack: (basePoints) => basePoints * 1.4,
    })
  }
}
