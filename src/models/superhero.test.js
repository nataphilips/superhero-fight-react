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

})
