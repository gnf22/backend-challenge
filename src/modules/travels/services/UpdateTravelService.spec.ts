import FakeCountriesRepository from '@modules/countries/repositories/fakes/FakeCountriesRepository';
import AppError from '@shared/errors/AppError';
import FakeTravelsRepository from '../repositories/fakes/FakeTravelsRepository';
import UpdateTravelService from './UpdateTravelService';

let fakeTravelsRepository: FakeTravelsRepository;
let fakeCountriesRepository: FakeCountriesRepository;
let updateTravel: UpdateTravelService;

describe('UpdateTravel', () => {
  beforeEach(() => {
    fakeTravelsRepository = new FakeTravelsRepository();
    fakeCountriesRepository = new FakeCountriesRepository();
    updateTravel = new UpdateTravelService(fakeTravelsRepository);
  });

  it('should be able to update a new travel', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Campinas',
      month: 6,
      year: 2021,
    });

    const newTravel = await updateTravel.execute({
      travel_id: travel.id,
      local: 'Bertioga',
      meta: '11/2021',
    });

    expect(newTravel.local).toBe('Bertioga');
  });

  it('should not be able to update a travel that does not exist', async () => {
    expect(
      updateTravel.execute({
        travel_id: 1,
        local: 'Guarulhos',
        meta: '05/2024',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a travel in a duplicate local in same country', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel1 = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Belo Horizonte',
      month: 5,
      year: 2026,
    });

    await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Ipatinga',
      month: 5,
      year: 2026,
    });

    await expect(
      updateTravel.execute({
        travel_id: travel1.id,
        local: 'Ipatinga',
        meta: '05/2023',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a travel with an invalid month', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel1 = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Rio Branco',
      month: 2,
      year: 2021,
    });

    await expect(
      updateTravel.execute({
        travel_id: travel1.id,
        local: 'Belém',
        meta: '25/2021',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
