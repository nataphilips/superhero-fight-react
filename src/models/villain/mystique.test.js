import Mystique from './mystique';

describe('Mystique class', () => {
  it('name should be Mystique', () => {
    const mystique = new Mystique()
    expect(mystique.name).toBe('Mystique')
  });

  it('should have correct stats', () => {
    const mystique = new Mystique()
    expect(mystique.combat).toBe(75)
    expect(mystique.power).toBe(65)
  });
})
