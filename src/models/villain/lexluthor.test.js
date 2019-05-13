import LexLuthor from './lexluthor';

describe('LexLuthor class', () => {
  it('name should be LexLuthor', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.name).toBe('LexLuthor')
  });

  it('should have correct stats', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.combat).toBe(50)
    expect(lexluthor.power).toBe(20)
  });
})
