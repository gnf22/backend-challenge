import FakeCountriesRepository from '@modules/countries/repositories/fakes/FakeCountriesRepository';
import AppError from '@shared/errors/AppError';
import FakeTravelsRepository from '../repositories/fakes/FakeTravelsRepository';

import RemoveTravelService from './RemoveTravelService';

let fakeTravelsRepository: FakeTravelsRepository;
let fakeCountriesRepository: FakeCountriesRepository;
let removeTravel: RemoveTravelService;

describe('FindTravels', () => {
  beforeEach(() => {
    fakeTravelsRepository = new FakeTravelsRepository();
    fakeCountriesRepository = new FakeCountriesRepository();
    removeTravel = new RemoveTravelService(fakeTravelsRepository);
  });

  it('should be able to remove a travel', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Recife',
      month: 12,
      year: 2022,
    });

    await removeTravel.execute({
      travel_id: travel.id,
    });

    const travels = fakeTravelsRepository.findAllTravels();

    expect(travels).not.toEqual([travel]);
  });

  it('should not be able to remove a travel that does not exist', async () => {
    expect(
      removeTravel.execute({
        travel_id: 1,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
