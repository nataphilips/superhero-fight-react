import Superhuman from './superhuman'

export default class Villain extends Superhuman {
  constructor(name) {
    super(name);
    this.side = 'bad'
  }
}
