import Villain from '../villain'

export default class Magneto extends Villain {
  constructor() {
    super('Magneto');

    this.stats = {
      health: 100,
      intelligence: 90,
      strength: 40,
      speed: 60,
      durability: 80,
      power: 85,
      combat: 70,
    };
    this.picture = '/pictures/magneto.jpg'
  }
}
