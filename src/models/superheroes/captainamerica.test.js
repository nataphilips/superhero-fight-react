import CaptainAmerica from './captainamerica';

describe('CaptainAmerica class', () => {
  it('name should be CaptainAmerica', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.name).toBe('CaptainAmerica')
  });

  it('should have correct stats', () => {
    const captainamerica = new CaptainAmerica()
    expect(captainamerica.combat).toBe(100)
    expect(captainamerica.power).toBe(60)
  });
})
