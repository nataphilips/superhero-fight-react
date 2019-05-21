import uuidv4 from 'uuid/v4';

export default class Superhuman {
  constructor(name) {
    this.name = name
    this.chosen = false
    this.id = uuidv4()
    this.superPowers = []
    this.stats = {
      health: 100,
      intelligence: 100,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 100,
    };
  }

  attack() {
    return this.superPowers.reduce((total, x) => {
      if(x.attack) {
        console.log(this.name + " got bonus attack points!!!")
      }
        return x.attack ? x.attack(total) : total
    }, this.stats.strength)
  }

  defend() {
    return this.superPowers.reduce((total, x) => {
        return x.defend ? x.defend(total) : total
    }, this.stats.strength * (this.stats.health / 100))
  }

  canDodge(attacker) {
    let probabilityOfDodge = 0.05

    if (this.stats.speed > attacker.stats.speed) {
      probabilityOfDodge += 1 - (attacker.stats.speed / this.stats.speed)
    }
    probabilityOfDodge = this.superPowers.reduce((total, x) => {
      return x.dodge ? x.dodge(total) : total
    }, probabilityOfDodge)

    return probabilityOfDodge > Math.random()
  }
}
