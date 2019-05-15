import uuidv4 from 'uuid/v4';

export default class Superhuman {
  constructor(name) {
    this.name = name;
    this.chosen = false;
    this.id = uuidv4();
    this.stats = [
      {name: 'Health', value: 100},
      {name: 'Intelligence', value: 100},
      {name: 'Strength', value: 100},
      {name: 'Speed', value: 100},
      {name: 'Durability', value: 100},
      {name: 'Power', value: 100},
      {name: 'Combat', value: 100},
    ]
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
