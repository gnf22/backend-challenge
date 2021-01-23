import AppError from '@shared/errors/AppError';
import FakeCountriesRepository from '../repositories/fakes/FakeCountriesRepository';
import CreateCountryService from './CreateCountryService';

let fakeCountriesRepository: FakeCountriesRepository;
let createCountry: CreateCountryService;

describe('CreateCountry', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    createCountry = new CreateCountryService(fakeCountriesRepository);
  });

  it('should be able to create a new country', async () => {
    const country = await createCountry.execute({
      name: 'Brasil',
      image_url: 'https://brasil.svg',
    });

    expect(country).toHaveProperty('id');
    expect(country.name).toBe('Brasil');
  });

  it('should not be able to create two countries with the same name', async () => {
    await createCountry.execute({
      name: 'Brasil',
      image_url: 'https://brasil.svg',
    });

    await expect(
      createCountry.execute({
        name: 'Brasil',
        image_url: 'https://brasil.svg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
