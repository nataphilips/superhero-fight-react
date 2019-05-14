import Villain from '../villain'

export default class LexLuthor extends Villain {
  constructor() {
    super('LexLuthor');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 10},
      {name: 'Speed', value: 15},
      {name: 'Durability', value: 20},
      {name: 'Power', value: 20},
      {name: 'Combat', value: 50},
    ]
    this.picture = '/pictures/lexluthor.jpg'
  }
}
