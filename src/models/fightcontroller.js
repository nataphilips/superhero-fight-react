import Superhuman from './superhuman'

export default class FightController {
  fight(char1, char2) {
    return char1.attacks(char2);
  }
}
