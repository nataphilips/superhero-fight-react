import Villain from '../villain'

export default class Mystique extends Villain {
  constructor() {
    super('Mystique');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 90},
      {name: 'Strength', value: 15},
      {name: 'Speed', value: 25},
      {name: 'Durability', value: 65},
      {name: 'Power', value: 65},
      {name: 'Combat', value: 75},
    ]
    this.picture = '/pictures/mystique.jpg'
  }
}
