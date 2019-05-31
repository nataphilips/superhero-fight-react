import Batman from './batman';

describe('Batman class', () => {
  it('name should be Batman', () => {
    const batman = new Batman()
    expect(batman.name).toBe('Batman')
  });

  it('should have correct stats', () => {
    const batman = new Batman()
    expect(batman.stats.intelligence).toBe(100)
    expect(batman.stats.speed).toBe(30)
  });
})
