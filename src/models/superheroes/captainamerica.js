import Superhero from '../superhero'

export default class CaptainAmerica extends Superhero {
  constructor() {
    super('Captain America');

    this.stats = {
      health: 100,
      intelligence: 85,
      strength: 20,
      speed: 40,
    };
    this.picture = '/pictures/captain-america.jpg';
    this.superpower = {
      name: "Shield",
      description: "50% better defence"
    }
  }
}

defend() {
  return super.defend() * 1.5;
}
}
