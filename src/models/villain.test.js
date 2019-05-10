import Villain from './villain'
import Superhero from './superhero'

describe('Villain class', () => {
  it('should create a villain character', () => {
    const villain = new Villain()
    expect(villain).toBeDefined()
  });

  it('should have starting health at 100', () => {
    const villain = new Villain()
    expect(villain.health).toBe(100)
  });

  it('should be able to name a villain', () => {
    const venom = new Villain('Venom')
    expect(venom.name).toBe('Venom')
  });

  it('should be able to attack a superhuman', () => {
    const lexLuthor = new Villain('Lex Luthor')
    const superman = new Superhero('Superman')

    const fightResult = lexLuthor.attacks(superman)

    expect(fightResult).toBe('Lex Luthor attacked Superman')
  });
})
