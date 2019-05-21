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
  attack(attacker, defender) {
    console.log(`------------------ round ${i++} -----------------------`.blue)
    console.log((attacker.name + " attacks " + defender.name).green)

    const attack = attacker.attack();
    const defense = defender.defend();

    let attackPoints;
    attackPoints = Math.max(0, attack - defense);
    attackPoints = 0.8 + (attackPoints / 100);
    attackPoints *= 4;

    if (defender.canDodge(attacker)) {
      const random = Math.random()
      if (random > 0.8) {
        attackPoints = 0
      } else if (random < 0.3) {
        attackPoints = attackPoints
      } else {
        attackPoints *= Math.random();
      }

      console.log(defender.name + " dodged!!! only some damaged taken.")
    }

    defender.stats.health -= attackPoints;

    console.log(('Attack points: ' + logNumber(attackPoints)).red)
    console.log(logName(attacker) + ": " + logNumber(attacker.stats.health))
    console.log(logName(defender) + ": " + logNumber(defender.stats.health))
  }

  fight(c1, c2) {
    do {
      this.attack(c1, c2);
      this.attack(c2, c1);
    } while (c1.stats.health > 0 && c2.stats.health > 0);

    const result = [c1.stats.health, c2.stats.health];

    if (c1.stats.health <= 0) {
      result.push(c1.name + ' is defeated');
    }

    if (c2.stats.health <= 0) {
      result.push(c2.name + ' is defeated');
    }

    return result;
  }
}
