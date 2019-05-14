import Superhero from '../superhero'

export default class Thor extends Superhero {
  constructor() {
    super('Thor');
    
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 85},
      {name: 'Strength', value: 100},
      {name: 'Speed', value: 85},
      {name: 'Durability', value: 100},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 100},
    ]
    this.picture = '/pictures/thor.jpg'
  }
}
