import FightController from './fightcontroller';
import Superhero from './superhero';

describe('FightController class', () => {
  it('should call attack function', () => {
    const spiderman = new Superhero('Spiderman')
    const aquaman = new Superhero('Aquaman')

    const fightResult = new FightController().fight(spiderman, aquaman)

    expect(fightResult).toBe('Spiderman attacked Aquaman and his health is now 90')
  });
})
