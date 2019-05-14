import Villain from '../villain'

export default class Joker extends Villain {
  constructor() {
    super('Joker');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 10},
      {name: 'Speed', value: 15},
      {name: 'Durability', value: 60},
      {name: 'Power', value: 45},
      {name: 'Combat', value: 70},
    ]
    this.picture = '/pictures/joker.jpg'
  }
}
