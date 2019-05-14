import Villain from '../villain'

export default class Thanos extends Villain {
  constructor() {
    super('Thanos');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 100},
      {name: 'Speed', value: 100},
      {name: 'Durability', value: 100},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 80},
    ]
    this.picture = '/pictures/thanos.png'
  }
}
