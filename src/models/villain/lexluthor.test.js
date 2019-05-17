import LexLuthor from './lexluthor';

describe('LexLuthor class', () => {
  it('name should be LexLuthor', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.name).toBe('Lex Luthor')
  });

  it('should have correct stats', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.stats.combat).toBe(50)
    expect(lexluthor.stats.power).toBe(20)
  });
})
