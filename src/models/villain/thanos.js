import Villain from '../villain'

export default class Thanos extends Villain {
  constructor() {
    super('Thanos');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      accuracy: 10,
    };
    this.picture = '/pictures/thanos.png'
  }
}
