import uuidv4 from 'uuid/v4';

export default class Superhuman {
  constructor(name) {
    this.name = name
    this.id = uuidv4()
    this.superPowers = []
    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      accuracy: 50,
    };
  }

  refresh() {
    this.stats.health = 100
  }

  attack() {
    return this.superPowers.reduce((total, x) => {
        return x.attack ? x.attack(total) : total
    }, this.stats.strength)
  }

  defend() {
    return this.superPowers.reduce((total, x) => {
        return x.defend ? x.defend(total) : total
    }, this.stats.strength * (this.stats.health / 100))
  }

  dodged(attacker) {
    let probabilityOfDodge = 0.05

    if (this.stats.speed > attacker.stats.speed) {
      probabilityOfDodge += 1 - (attacker.stats.speed / this.stats.speed)
    }
    probabilityOfDodge = this.superPowers.reduce((total, x) => {
      return x.dodge ? x.dodge(total) : total
    }, probabilityOfDodge)

    if (attacker.accuracy()/100 > Math.random()) {
      probabilityOfDodge *= 0.75;
    }
    return probabilityOfDodge > Math.random()
  }

  accuracy() {
    return this.superPowers.reduce((total, x) => {
      return x.accuracy ? x.accuracy(total) : total
    }, this.stats.accuracy)
  }
}
