import Batman from './batman';

describe('Batman class', () => {
  it('name should be Batman', () => {
    const batman = new Batman()
    expect(batman.name).toBe('Batman')
  });

  it('should have correct stats', () => {
    const batman = new Batman()
    expect(batman.combat).toBe(100)
    expect(batman.power).toBe(50)
  });
})
