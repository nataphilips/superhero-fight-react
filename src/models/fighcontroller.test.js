import FightController from './fightcontroller';
import Loki from './villain/loki';
import Thor from './superheroes/thor';

describe('FightController class', () => {
  it('should have a fight winner', () => {
    const fightResult = new FightController().fight(new Thor(), new Loki())

    expect(fightResult.winner).toBeDefined()
  });
})
