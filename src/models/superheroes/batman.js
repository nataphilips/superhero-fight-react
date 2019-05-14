import Superhero from '../superhero'

export default class Batman extends Superhero {
  constructor() {
    super('Batman');
    
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 20},
      {name: 'Speed', value: 30},
      {name: 'Durability', value: 50},
      {name: 'Power', value: 50},
      {name: 'Combat', value: 100},
    ]
    this.picture = '/pictures/batman.jpg'
  }
}
