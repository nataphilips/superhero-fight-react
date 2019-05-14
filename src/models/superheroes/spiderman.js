import Superhero from '../superhero'

export default class Spiderman extends Superhero {
  constructor() {
    super('Spiderman');
    
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 55},
      {name: 'Speed', value: 70},
      {name: 'Durability', value: 75},
      {name: 'Power', value: 75},
      {name: 'Combat', value: 95},
    ]
    this.picture = '/pictures/spiderman.jpg'
  }
}
