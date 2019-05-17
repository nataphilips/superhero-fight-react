import Superman from './superman';

describe('Superman class', () => {
  it('name should be Superman', () => {
    const superman = new Superman()
    expect(superman.name).toBe('Superman')
  });

  it('should have correct stats', () => {
    const superman = new Superman()
    expect(superman.stats.combat).toBe(85)
    expect(superman.stats.power).toBe(100)
  });
})
