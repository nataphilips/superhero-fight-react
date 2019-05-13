import Magneto from './magneto';

describe('Magneto class', () => {
  it('name should be Magneto', () => {
    const magneto = new Magneto()
    expect(magneto.name).toBe('Magneto')
  });

  it('should have correct stats', () => {
    const magneto = new Magneto()
    expect(magneto.combat).toBe(70)
    expect(magneto.power).toBe(85)
  });
})
