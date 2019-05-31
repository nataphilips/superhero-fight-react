import Mystique from './mystique';

describe('Mystique class', () => {
  it('name should be Mystique', () => {
    const mystique = new Mystique()
    expect(mystique.name).toBe('Mystique')
  });

  it('should have correct stats', () => {
    const mystique = new Mystique()
    expect(mystique.stats.intelligence).toBe(90)
    expect(mystique.stats.speed).toBe(25)
  });
})
