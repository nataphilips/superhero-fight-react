import Joker from './joker';

describe('Joker class', () => {
  it('name should be Joker', () => {
    const joker = new Joker()
    expect(joker.name).toBe('Joker')
  });

  it('should have correct stats', () => {
    const joker = new Joker()
    expect(joker.combat).toBe(85)
    expect(joker.power).toBe(100)
  });
})
