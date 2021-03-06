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
    const defense = defender.defend() * attacker.reduceDefese();

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
      attackerHealth: attacker.stats.health,
      defender: defender.name,
      defenderHealth: defender.stats.health,
      attack: attack,
      defense: defense,
      damage: damage,
      dodged: dodged,
    })

    this.debug && console.log(('Attack points: ' + logNumber(damage)).red)
    this.debug && console.log(logName(attacker) + ": " + logNumber(attacker.stats.health))
    this.debug && console.log(logName(defender) + ": " + logNumber(defender.stats.health))
  }

  fight(c1, c2, debug = false) {
    this.debug = debug
    this.fightMoves = []

    let player1Escaped;
    let player2Escaped;

    do {
      player2Escaped = c2.ranAway(c1);
      if (!player2Escaped) {
        this.attack(c1, c2);
      } else {
        c2.stats.health = 0;
        break;
      }

      player1Escaped = c1.ranAway(c2);
      if (!player1Escaped) {
        this.attack(c2, c1);
      } else {
        c1.stats.health = 0;
        break;
      }

    } while (c1.stats.health > 0 && c2.stats.health > 0 && !player2Escaped && !player1Escaped);

    const p1 = this.fightMoves.filter(x => x.attacker === c1.name)
    const p2 = this.fightMoves.filter(x => x.attacker === c2.name)
    const n = (num) => {
      return parseFloat(num).toFixed(2)
    }

    return {
      moves: this.fightMoves,
      attackerHealth: c1.stats.health,
      defenderHealth: c2.stats.health,
      winner:
        (c1.stats.health > 0) ? c1.name :
        (c2.stats.health > 0) ? c2.name :
        'No one',
      escaper:
        (player2Escaped) ? (c2.name) :
        (player1Escaped) ? (c1.name) :
        'None',
      p1AvgDamage:
        p1.find(x => x.damage) ?
        n(p1.map(x => x.damage)
          .reduce((a, b) => a + b) / p1.length) :
        0,
      p2AvgDamage:
        p2.find(x => x.damage) ?
        n(p2.map(x => x.damage)
          .reduce((a, b) => a + b) / p2.length) :
        0,
      p1Dodging:
        n(p2.filter(x => x.dodged).length / p2.length * 100),
      p2Dodging:
        n(p1.filter(x => x.dodged).length / p1.length * 100),
    }
  }
}
