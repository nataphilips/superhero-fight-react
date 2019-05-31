import Hulk from './hulk';

describe('Hulk class', () => {
  it('name should be Hulk', () => {
    const hulk = new Hulk()
    expect(hulk.name).toBe('Hulk')
  });

  it('should have correct stats', () => {
    const hulk = new Hulk()
    expect(hulk.stats.speed).toBe(65)
    expect(hulk.stats.strength).toBe(100)
  });
})
