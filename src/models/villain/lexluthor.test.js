import LexLuthor from './lexluthor';

describe('LexLuthor class', () => {
  it('name should be LexLuthor', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.name).toBe('Lex Luthor')
  });

  it('should have correct stats', () => {
    const lexluthor = new LexLuthor()
    expect(lexluthor.stats.intelligence).toBe(100)
    expect(lexluthor.stats.speed).toBe(15)
  });
})
