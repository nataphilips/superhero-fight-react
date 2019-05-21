import Superhero from '../superhero'

export default class CaptainAmerica extends Superhero {
  constructor() {
    super('Captain America');

    this.stats = {
      health: 100,
      intelligence: 85,
      strength: 60,
      speed: 40,
    };
    this.picture = '/pictures/captain-america.jpg';

    this.superPowers.push({
      name: 'Shield',
      description: '50% bonus to defense',
      defend: (basePoints) => basePoints * 1.5,
    })
  }
}
