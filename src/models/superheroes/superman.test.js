import Superman from './superman';

describe('Superman class', () => {
  it('name should be Superman', () => {
    const superman = new Superman()
    expect(superman.name).toBe('Superman')
  });

  it('should have correct stats', () => {
    const superman = new Superman()
    expect(superman.stats.speed).toBe(100)
    expect(superman.stats.intelligence).toBe(100)
  });
})
