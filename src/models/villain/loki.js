import Villain from '../villain'

export default class Loki extends Villain {
  constructor() {
    super('Loki');

    this.stats = {
      health: 100,
      intelligence: 95,
      strength: 65,
      speed: 50,
      durability: 85,
      power: 100,
      combat: 60,
    };
    this.picture = '/pictures/loki.jpg'
  }
}
