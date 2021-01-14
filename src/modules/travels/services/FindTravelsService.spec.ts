import FakeCountriesRepository from '@modules/countries/repositories/fakes/FakeCountriesRepository';
import FakeTravelsRepository from '../repositories/fakes/FakeTravelsRepository';

import FindTravelsService from './FindTravelsService';

let fakeTravelsRepository: FakeTravelsRepository;
let fakeCountriesRepository: FakeCountriesRepository;
let findTravels: FindTravelsService;

describe('FindTravels', () => {
  beforeEach(() => {
    fakeTravelsRepository = new FakeTravelsRepository();
    fakeCountriesRepository = new FakeCountriesRepository();
    findTravels = new FindTravelsService(fakeTravelsRepository);
  });

  it('should be able to list all travels', async () => {
    const country = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const travel1 = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Santos',
      month: 11,
      year: 2022,
    });

    const travel2 = await fakeTravelsRepository.create({
      country_id: country.id,
      local: 'Uberaba',
      month: 10,
      year: 2021,
    });

    const travels = await findTravels.execute();

    expect(travels).toEqual([travel1, travel2]);
  });
});
