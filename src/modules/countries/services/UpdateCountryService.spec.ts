import AppError from '@shared/errors/AppError';
import FakeCountriesRepository from '../repositories/fakes/FakeCountriesRepository';
import UpdateCountryService from './UpdateCountryService';

let fakeCountriesRepository: FakeCountriesRepository;
let updateCountry: UpdateCountryService;

describe('UpdateCountry', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    updateCountry = new UpdateCountryService(fakeCountriesRepository);
  });

  it('should be able to update a country', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/bra.svg',
    });

    const newCountry = await updateCountry.execute({
      country_id: country.id,
      name: 'Itália',
      image_url: 'https://www.images.com/bra.svg',
    });

    expect(newCountry.name).toBe('Itália');
  });

  it('should not be able to update a country that doest not exist', async () => {
    await expect(
      updateCountry.execute({
        country_id: 1,
        name: 'México',
        image_url: 'https://www.images.com/bra.svg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a country already used', async () => {
    await fakeCountriesRepository.create({
      name: 'Paraguai',
      image_url: 'https://www.images.com/par.svg',
    });

    const country = await fakeCountriesRepository.create({
      name: 'Chile',
      image_url: 'https://www.images.com/chi.svg',
    });

    await expect(
      updateCountry.execute({
        country_id: country.id,
        name: 'Paraguai',
        image_url: 'https://www.images.com/bra.svg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
