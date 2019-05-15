import Superhero from '../superhero'

export default class CaptainAmerica extends Superhero {
  constructor() {
    super('Captain America');

    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 85},
      {name: 'Strength', value: 20},
      {name: 'Speed', value: 40},
      {name: 'Durability', value: 55},
      {name: 'Power', value: 60},
      {name: 'Combat', value: 100},
    ]
    this.picture = '/pictures/captain-america.jpg'
  }
}
