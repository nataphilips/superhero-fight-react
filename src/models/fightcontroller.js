import Superhuman from './superhuman'

export default class FightController {
  attack(attacker, defender) {
    const attack = attacker.attack()
    const defense = defender.defend()

    let attackPoints
    attackPoints = Math.max(0, attack - defense);
    attackPoints = 1 + (attackPoints / 100)

    if (defender.canDodge(attacker)) {
      attackPoints = 0
    }

    defender.stats.health -= attackPoints
  }

  fight(c1, c2) {
    do {
      this.attack(c1, c2)
      this.attack(c2, c1)
    } while (c1.stats.health > 0 && c2.stats.health > 0);

    const result = [c1.stats.health, c2.stats.health];

    if (c1.stats.health <= 0) {
      result.push(c1.name + ' is defeated')
    }

    if (c2.stats.health <= 0) {
      result.push(c2.name + ' is defeated')
    }

    return result;
  }
}
