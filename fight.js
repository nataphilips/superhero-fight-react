import FightController from './src/models/fightcontroller';
import Loki from './src/models/villain/loki';
import Thor from './src/models/superheroes/thor';

const fightResult = new FightController()
  .fight(new Thor(), new Loki())

console.log(fightResult)
