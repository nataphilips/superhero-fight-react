import Loki from './loki';

describe('Loki class', () => {
  it('name should be Loki', () => {
    const loki = new Loki()
    expect(loki.name).toBe('Loki')
  });

  it('should have correct stats', () => {
    const loki = new Loki()
    expect(loki.stats.intelligence).toBe(95)
    expect(loki.stats.speed).toBe(60)
  });
})
