import FightController from './src/models/fightcontroller';
import Spiderman from './src/models/superheroes/spiderman';
import CaptainAmerica from './src/models/superheroes/captainamerica';

const fightResult = new FightController()
  .fight(new CaptainAmerica(), new Spiderman())

console.log(fightResult)
