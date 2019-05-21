import FightController from './src/models/fightcontroller';
import Spiderman from './src/models/superheroes/spiderman';
import Loki from './src/models/villain/loki';
import CaptainAmerica from './src/models/superheroes/captainamerica';
import Batman from './src/models/superheroes/batman';
import Superman from './src/models/superheroes/superman';
import Thor from './src/models/superheroes/thor';

const n = (num) => {
  return parseFloat(num).toFixed(2)
}

const controller = new FightController()

const superman = new Superman()
const thor = new Thor()
const fights = []

for(let i = 0; i < 100; i++) {
  const r = controller.fight(new Superman(), new Thor(), false)

  fights.push(r)
}

const thorAttacks = fights
  .reduce((r, x) => r.concat(x.moves),[])
  .filter(x => x.attacker === 'Thor')

const supermanAttacks = fights
  .reduce((r, x) => r.concat(x.moves),[])
  .filter(x => x.attacker === 'Superman')

console.log('Thor')
console.log('    won ' + fights.filter(x => x.winner === 'Thor').length)
console.log('    avg attack ' +
  thorAttacks
    .map(x => x.attack)
    .reduce((a, b) => a + b) / thorAttacks.length
)
console.log('    avg defense ' +
  supermanAttacks
    .map(x => x.defense)
    .reduce((a, b) => a + b) / supermanAttacks.length
)
console.log('    avg damage ' +
  thorAttacks
    .map(x => x.damage)
    .reduce((a, b) => a + b) / thorAttacks.length
)
console.log('    dodging ' +
  n(supermanAttacks
    .filter(x => x.dodged).length / supermanAttacks.length) * 100 + '%'
)

console.log('Superman')
console.log('    won ' + fights.filter(x => x.winner === 'Superman').length)
console.log('    avg attack ' +
  supermanAttacks
    .map(x => x.attack)
    .reduce((a, b) => a + b) / supermanAttacks.length
)
console.log('    avg defense ' +
  thorAttacks
    .map(x => x.defense)
    .reduce((a, b) => a + b) / thorAttacks.length
)
console.log('    avg damage ' +
  supermanAttacks
    .map(x => x.damage)
    .reduce((a, b) => a + b) / supermanAttacks.length
)
console.log('    dodging ' +
  n(thorAttacks
    .filter(x => x.dodged).length / thorAttacks.length) * 100 + '%'
)

console.log('Draw ' + fights.filter(x => x.winner === 'None').length)
