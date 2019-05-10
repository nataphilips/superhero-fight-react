export default class Superhuman {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.intelligence = 100;
    this.strength = 100;
    this.speed = 100;
    this.durability = 100;
    this.power = 100;
    this.combat = 100
  }

  attacks(character) {
    let fightResult = '';
    if (!(character instanceof Superhuman)) {
      fightResult = this.name + ' cannot attack anything';
    } else {
      fightResult = this.name + ' attacked ' + character.name;
    }
    return fightResult;
  }
}
