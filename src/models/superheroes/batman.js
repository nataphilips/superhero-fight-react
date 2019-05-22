import Superhero from '../superhero'

export default class Batman extends Superhero {
  constructor() {
    super('Batman');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 20,
      speed: 30,
      accuracy: 10,
    };

    this.picture = '/pictures/batman.jpg'

    this.superPowers.push({
      name: 'Bat Equipment',
      description: 'Increases all the abilities significantly',
      dodge: (basePoints) => (basePoints + 0.3),
      defend: (basePoints) => basePoints * 4,
      attack: (basePoints) => basePoints * 4,
    })
  }
}
