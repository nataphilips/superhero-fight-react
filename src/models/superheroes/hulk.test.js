import Hulk from './hulk';

describe('Hulk class', () => {
  it('name should be Hulk', () => {
    const hulk = new Hulk()
    expect(hulk.name).toBe('Hulk')
  });

  it('should have correct stats', () => {
    const hulk = new Hulk()
    expect(hulk.stats.combat).toBe(85)
    expect(hulk.stats.power).toBe(100)
  });
})
