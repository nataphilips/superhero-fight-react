import Superhero from '../superhero'

export default class Hulk extends Superhero {
  constructor() {
    super('Hulk');
    
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 95},
      {name: 'Strength', value: 100},
      {name: 'Speed', value: 65},
      {name: 'Durability', value: 100},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 85},
    ]
    this.picture = '/pictures/hulk.jpg'
  }
}
