import Thor from './thor';

describe('Thor class', () => {
  it('name should be Thor', () => {
    const thor = new Thor()
    expect(thor.name).toBe('Thor')
  });

  it('should have correct stats', () => {
    const thor = new Thor()
    expect(thor.stats.combat).toBe(100)
    expect(thor.stats.power).toBe(100)
  });
})
