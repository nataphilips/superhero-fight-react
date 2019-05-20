import Superhuman from './superhuman'

export default class FightController {
  fight(c1, c2) {
    do {
      let c2Attack = Math.max(0, c2.attack() - c1.defend());
      let c1Attack = Math.max(0, c1.attack() - c2.defend());

      let probabilityOfDodge;
      if (c1.stats.speed > c2.stats.speed) {
        probabilityOfDodge = c1.stats.speed / c2.stats.speed - 1;
        if (Math.random() > probabilityOfDodge) {
          c1.stats.health -= 1 + c2Attack / 100;
        }
        c2.stats.health -= 1 + c1Attack / 100;
      }
      else if (c2.stats.speed > c1.stats.speed) {
        probabilityOfDodge = c2.stats.speed / c1.stats.speed - 1;
        if (Math.random() > probabilityOfDodge) {
          c2.stats.health -= 1 + c1Attack / 100;
        }
        c1.stats.health -= 1 + c2Attack / 100;
      } else {
        c1.stats.health -= 1 + c2Attack / 100;
        c2.stats.health -= 1 + c1Attack / 100;
      }

      // if (c1.speed - c2.speed > Math.floor((Math.random() * 80) + 1)) {
      //   c1.attack();
      // }
      // if (c2.speed - c1.speed > Math.floor((Math.random() * 80) + 1)) {
      //   c2.attack();
      // }
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
