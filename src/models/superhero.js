import Superhuman from './superhuman'

export default class Superhero extends Superhuman {
  constructor(name) {
    super(name);

    this.side = 'good'
  }
}
