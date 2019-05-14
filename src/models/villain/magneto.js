import Villain from '../villain'

export default class Magneto extends Villain {
  constructor() {
    super('Magneto');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 90},
      {name: 'Strength', value: 40},
      {name: 'Speed', value: 60},
      {name: 'Durability', value: 80},
      {name: 'Power', value: 85},
      {name: 'Combat', value: 70},
    ]
    this.picture = '/pictures/magneto.jpg'
  }
}
