import CaptainAmerica from './captainamerica';

describe('CaptainAmerica class', () => {
  it('name should be CaptainAmerica', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.name).toBe('Captain America')
  });

  it('should have correct stats', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.stats.combat).toBe(100)
    expect(captainamerica.stats.power).toBe(60)
  });
})
