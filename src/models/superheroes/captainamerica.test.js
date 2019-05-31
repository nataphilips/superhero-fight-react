import CaptainAmerica from './captainamerica';

describe('CaptainAmerica class', () => {
  it('name should be CaptainAmerica', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.name).toBe('Captain America')
  });

  it('should have correct stats', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.stats.intelligence).toBe(85)
    expect(captainamerica.stats.strength).toBe(60)
  });
})
