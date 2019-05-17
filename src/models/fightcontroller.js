import Superhuman from './superhuman'

export default class FightController {
  fight(c1, c2) {
    do {
      c2.stats.health -= 1 + ((c1.attack() - c2.defend()) / 100)
      c1.stats.health -= 1 + ((c2.attack() - c1.defend()) / 100)

      if (c1.speed - c2.speed > Math.floor((Math.random() * 80) + 1)) {
        c1.attack();
      }
      if (c2.speed - c1.speed > Math.floor((Math.random() * 80) + 1)) {
        c2.attack();
      }
    } while (c1.stats.health > 0 && c2.stats.health > 0)

    const result = [c1.stats.health, c2.stats.health]

    if (c1.stats.health <= 0) {
      result.push(c1.name + ' died')
    }

    if (c2.stats.health <= 0) {
      result.push(c2.name + ' died')
    }

    return result
  }
}
