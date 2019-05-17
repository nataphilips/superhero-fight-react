import Loki from './loki';

describe('Loki class', () => {
  it('name should be Loki', () => {
    const loki = new Loki()
    expect(loki.name).toBe('Loki')
  });

  it('should have correct stats', () => {
    const loki = new Loki()
    expect(loki.stats.combat).toBe(60)
    expect(loki.stats.power).toBe(100)
  });
})
