import Villain from '../villain'

export default class Joker extends Villain {
  constructor() {
    super('Joker');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 10,
      speed: 15,
      durability: 60,
      power: 45,
      combat: 70,
    };
    this.picture = '/pictures/joker.jpg'
  }
}
