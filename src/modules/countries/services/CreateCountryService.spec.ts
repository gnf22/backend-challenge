import FakeCountriesRepository from '../repositories/fakes/FakeCountriesRepository';
import CreateCountryService from './CreateCountryService';

describe('CreateCountry', () => {
  it('should be able to create a new country', async () => {
    const fakeCountriesRepository = new FakeCountriesRepository();
    const createCountry = new CreateCountryService(fakeCountriesRepository);

    const country = await createCountry.execute({
      name: 'Brasil',
      image_url: 'https://brasil.svg',
    });

    expect(country).toHaveProperty('id');
    expect(country.name).toBe('Brasil');
  });

  // it('should not be able to create two countries with the same name', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
