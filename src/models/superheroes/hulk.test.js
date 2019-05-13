import Hulk from './hulk';

describe('Hulk class', () => {
  it('name should be Hulk', () => {
    const hulk = new Hulk()
    expect(hulk.name).toBe('Hulk')
  });

  it('should have correct stats', () => {
    const hulk = new Hulk()
    expect(hulk.combat).toBe(85)
    expect(hulk.power).toBe(100)
  });
})
