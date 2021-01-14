import FakeCountriesRepository from '../repositories/fakes/FakeCountriesRepository';
import FindCountriesService from './FindCountriesService';

let fakeCountriesRepository: FakeCountriesRepository;
let findCountry: FindCountriesService;

describe('FindCountry', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    findCountry = new FindCountriesService(fakeCountriesRepository);
  });

  it('should be able to list the countries', async () => {
    const country1 = await fakeCountriesRepository.create({
      name: 'Brasil',
      image_url: 'https://www.images.com/brasil.svg',
    });

    const country2 = await fakeCountriesRepository.create({
      name: 'Estados Unidos',
      image_url: 'https://www.images.com/eua.svg',
    });

    const countries = await findCountry.execute();

    expect(countries).toEqual([country1, country2]);
  });
});
