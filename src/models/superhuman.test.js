import Superhuman from './superhuman';

describe('Superhuman class', () => {
  it('should create a superhuman character', () => {
    const character = new Superhuman()
    expect(character).toBeDefined()
  });

  it('should have starting health at 100', () => {
    const character = new Superhuman()
    expect(character.stats.health).toBe(100)
  });

  it('should be able to name a superhuman', () => {
    const mijao = new Superhuman('Mijao')
    expect(mijao.name).toBe('Mijao')
  });
})
