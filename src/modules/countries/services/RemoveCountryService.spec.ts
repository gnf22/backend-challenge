import AppError from '@shared/errors/AppError';
import FakeCountriesRepository from '../repositories/fakes/FakeCountriesRepository';
import RemoveCountryService from './RemoveCountryService';

let fakeCountriesRepository: FakeCountriesRepository;
let removeCountry: RemoveCountryService;

describe('CreateCountry', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    removeCountry = new RemoveCountryService(fakeCountriesRepository);
  });

  it('should be able to remove a country', async () => {
    const country1 = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const countries = await fakeCountriesRepository.findAllCountries();

    await removeCountry.execute({
      country_id: country1.id,
    });

    expect(countries).not.toEqual([country1]);
  });

  it('should not be able to remove a country that doest not exist', async () => {
    expect(
      removeCountry.execute({
        country_id: 1,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
