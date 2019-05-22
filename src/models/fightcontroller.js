import colors from 'colors'
import Superhuman from './superhuman'

const logName = (char) => {
  return char.name.padEnd(15, ' ')
}

const logNumber = (num) => {
  return parseFloat(num).toFixed(2)
}

let i = 1

export default class FightController {
  constructor() {
    this.fightMoves = []
  }

  attack(attacker, defender) {
    this.debug && console.log(`------------------ round ${i++} -----------------------`.blue)
    this.debug && console.log((attacker.name + " attacks " + defender.name).green)

    const attack = attacker.attack();
    const defense = defender.defend();

    let damage
    damage = Math.max(0, attack - defense)
    damage = 0.8 + (damage / 100)
    damage *= 4

    let dodged = defender.dodged(attacker)
    if (dodged) {
      const random = Math.random()

      if (random > 0.8) {
        damage = 0
      } else if (random < 0.3) {
        damage = damage
      } else {
        damage *= Math.random();
      }
    }

    defender.stats.health -= damage;

    this.fightMoves.push({
      attacker: attacker.name,
      defender: defender.name,
      attack: attack,
      defense: defense,
      damage: damage,
      dodged: dodged,
    })

    this.debug && console.log(('Attack points: ' + logNumber(damage)).red)
    this.debug && console.log(logName(attacker) + ": " + logNumber(attacker.stats.health))
    this.debug && console.log(logName(defender) + ": " + logNumber(defender.stats.health))
  }

  fight(c1, c2, debug = true) {
    this.debug = debug
    this.fightMoves = []

    do {
      this.attack(c1, c2);
      this.attack(c2, c1);
    } while (c1.stats.health > 0 && c2.stats.health > 0);

    return {
      moves: this.fightMoves,
      attackerHealth: c1.stats.health,
      defenderHealth: c2.stats.health,
      winner:
        (c1.stats.health > 0) ? c1.name :
        (c2.stats.health > 0) ? c2.name :
        'None',
    }
  }
}
