import Superhero from '../superhero'

export default class Hulk extends Superhero {
  constructor() {
    super('Hulk');

    this.stats = {
      health: 100,
      intelligence: 95,
      strength: 100,
      speed: 65,
      durability: 100,
      power: 100,
      combat: 85,
    }

    this.picture = '/pictures/hulk.jpg'

    this.superPowers.push({
      name: 'Hulk Smash',
      description: 'Like Khabib',
      attack: (basePoints) => basePoints * 2,
    })
  }
}
