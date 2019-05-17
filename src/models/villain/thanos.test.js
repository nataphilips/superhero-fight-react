import Thanos from './thanos';

describe('Thanos class', () => {
  it('name should be Thanos', () => {
    const thanos = new Thanos()
    expect(thanos.name).toBe('Thanos')
  });

  it('should have correct stats', () => {
    const thanos = new Thanos()
    expect(thanos.stats.combat).toBe(80)
    expect(thanos.stats.power).toBe(100)
  });
})
