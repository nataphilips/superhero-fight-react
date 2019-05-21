import FightController from './src/models/fightcontroller';
import Hulk from './src/models/superheroes/hulk';
import Spiderman from './src/models/superheroes/spiderman';

const fightResult = new FightController()
  .fight(new Hulk(), new Spiderman())

console.log(fightResult)
