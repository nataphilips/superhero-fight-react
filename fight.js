import FightController from './src/models/fightcontroller';
import Spiderman from './src/models/superheroes/spiderman';
import Loki from './src/models/villain/loki';
import CaptainAmerica from './src/models/superheroes/captainamerica';
import Batman from './src/models/superheroes/batman';
import Superman from './src/models/superheroes/superman';
import Thor from './src/models/superheroes/thor';
import LexLuthor from './src/models/villain/lexluthor';
import Hulk from './src/models/superheroes/hulk';
import Magneto from './src/models/villain/magneto';
import Thanos from './src/models/villain/thanos';
import Joker from './src/models/villain/joker';

const n = (num) => {
  return parseFloat(num).toFixed(2)
}

const controller = new FightController()

const fights = []

for(let i = 0; i < 100; i++) {
  const r = controller.fight(new Joker(), new LexLuthor(), false)

  fights.push(r)
}

const p1 = fights
  .reduce((r, x) => r.concat(x.moves),[])
  .filter(x => x.attacker === 'Joker')

const p2 = fights
  .reduce((r, x) => r.concat(x.moves),[])
  .filter(x => x.attacker === 'Lex Luthor')

console.log('Joker')
console.log('    won ' + fights.filter(x => x.winner === 'Joker').length)
console.log('    escaped from the battlefield ' + fights.filter(x => x.escaper === 'Joker').length)
console.log('    avg attack ' +
  p1.map(x => x.attack)
    .reduce((a, b) => a + b) / p1.length
)
console.log('    avg defense ' +
  p2.map(x => x.defense)
    .reduce((a, b) => a + b) / p2.length
)
console.log('    avg damage ' +
  p1.map(x => x.damage)
    .reduce((a, b) => a + b) / p1.length
)
console.log('    dodging ' +
  n(p2.filter(x => x.dodged).length / p2.length) * 100 + '%'
)

console.log('LexLuthor')
console.log('    won ' + fights.filter(x => x.winner === 'Lex Luthor').length)
console.log('    escaped from the battlefield ' + fights.filter(x => x.escaper === 'Lex Luthor').length)
console.log('    avg attack ' +
  p2.map(x => x.attack)
    .reduce((a, b) => a + b) / p2.length
)
console.log('    avg defense ' +
  p1.map(x => x.defense)
    .reduce((a, b) => a + b) / p1.length
)
console.log('    avg damage ' +
  p2.map(x => x.damage)
    .reduce((a, b) => a + b) / p2.length
)
console.log('    dodging ' +
  n(p1.filter(x => x.dodged).length / p1.length) * 100 + '%'
)

console.log('Draw ' + fights.filter(x => x.winner === 'None').length)
