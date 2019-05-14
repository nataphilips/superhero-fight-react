import Superhero from '../superhero'

export default class Superman extends Superhero {
  constructor() {
    super('Superman');
    
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 100},
      {name: 'Speed', value: 100},
      {name: 'Durability', value: 100},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 85},
    ]
    this.picture = '/pictures/superman.jpg'
  }
}
