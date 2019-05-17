import Villain from '../villain'

export default class Mystique extends Villain {
  constructor() {
    super('Mystique');

    this.stats = {
      health: 100,
      intelligence: 90,
      strength: 15,
      speed: 25,
      durability: 65,
      power: 65,
      combat: 75,
    };
    this.picture = '/pictures/mystique.jpg'
  }
}
