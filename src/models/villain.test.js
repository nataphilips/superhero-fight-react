import Villain from './villain'
import Superhero from './superhero'

describe('Villain class', () => {
  it('should create a villain character', () => {
    const villain = new Villain()
    expect(villain).toBeDefined()
  });

  it('should have starting health at 100', () => {
    const villain = new Villain()
    expect(villain.stats.health).toBe(100)
  });

})
