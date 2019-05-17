import Superhero from './superhero';

describe('Superhero class', () => {
  it('should create a superhero character', () => {
    const superhero = new Superhero()
    expect(superhero).toBeDefined()
  });

  it('should have starting health at 100', () => {
    const superhero = new Superhero()
    expect(superhero.stats.health).toBe(100)
  });

  it('should be able to name a superhero', () => {
    const superhero = new Superhero('Spiderman')
    expect(superhero.name).toBe('Spiderman')
  });

  it('should be able to attack a superhuman', () => {
    const spiderman = new Superhero('Spiderman')
    const aquaman = new Superhero('Aquaman')

    const fightResult = spiderman.attacks(aquaman)

    expect(fightResult).toBe('Spiderman attacked Aquaman and his health is now 90')
  });

  it('should not be able to attack random things', () => {
    const superhero = new Superhero('Spiderman')

    const fightResult = superhero.attacks({ name: 'anything' })

    expect(fightResult).toBe('Spiderman cannot attack anything')
  });
})
