import Villain from '../villain'

export default class Loki extends Villain {
  constructor() {
    super('Loki');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 95},
      {name: 'Strength', value: 65},
      {name: 'Speed', value: 50},
      {name: 'Durability', value: 85},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 60},
    ]
    this.picture = '/pictures/loki.jpg'
  }
}
