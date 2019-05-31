import Spiderman from './spiderman';

describe('Spiderman class', () => {
  it('name should be Spiderman', () => {
    const spiderman = new Spiderman()
    expect(spiderman.name).toBe('Spiderman')
  });

  it('should have correct stats', () => {
    const spiderman = new Spiderman()
    expect(spiderman.stats.intelligence).toBe(100)
    expect(spiderman.stats.strength).toBe(55)
  });
})
