import FakeCountriesRepository from '@modules/countries/repositories/fakes/FakeCountriesRepository';
import AppError from '@shared/errors/AppError';
import FakeTravelsRepository from '../repositories/fakes/FakeTravelsRepository';
import CreateTravelService from './CreateTravelService';

let fakeTravelsRepository: FakeTravelsRepository;
let fakeCountriesRepository: FakeCountriesRepository;
let createTravel: CreateTravelService;

describe('CreateTravel', () => {
  beforeEach(() => {
    fakeTravelsRepository = new FakeTravelsRepository();
    fakeCountriesRepository = new FakeCountriesRepository();
    createTravel = new CreateTravelService(
      fakeTravelsRepository,
      fakeCountriesRepository,
    );
  });

  it('should be able to create a new travel', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel = await createTravel.execute({
      country_id: country.id,
      local: 'São Paulo',
      meta: '04/2021',
    });

    expect(travel).toHaveProperty('id');
    expect(travel.local).toBe('São Paulo');
  });

  it('should not be able to create a travel with a country that does not exist', async () => {
    expect(
      createTravel.execute({
        country_id: 1,
        local: 'Santa Vitória do Palmar',
        meta: '05/2022',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a duplicate travel local in same country', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    await createTravel.execute({
      country_id: country.id,
      local: 'Curitiba',
      meta: '06/2021',
    });

    expect(
      createTravel.execute({
        country_id: country.id,
        local: 'Curitiba',
        meta: '05/2022',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a travel with an invalid month', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    expect(
      createTravel.execute({
        country_id: country.id,
        local: 'Blumenau',
        meta: '15/2022',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
