import Villain from '../villain'

export default class Magneto extends Villain {
  constructor() {
    super('Magneto');

    this.stats = {
      health: 100,
      intelligence: 90,
      strength: 40,
      speed: 60,
      accuracy: 10,  
    };
    this.picture = '/pictures/magneto.jpg'
  }
}
