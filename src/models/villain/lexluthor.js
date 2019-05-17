import Villain from '../villain'

export default class LexLuthor extends Villain {
  constructor() {
    super('Lex Luthor');

    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 10,
      speed: 15,
      durability: 20,
      power: 20,
      combat: 50,
    };
    this.picture = '/pictures/lexluthor.jpg'
  }
}
