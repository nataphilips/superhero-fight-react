import FightController from './src/models/fightcontroller';
import Spiderman from './src/models/superheroes/spiderman';
import Loki from './src/models/villain/loki';
import CaptainAmerica from './src/models/superheroes/captainamerica';
import Batman from './src/models/superheroes/batman';

const fightResult = new FightController()
  .fight(new Loki(), new Batman())

console.log(fightResult)
