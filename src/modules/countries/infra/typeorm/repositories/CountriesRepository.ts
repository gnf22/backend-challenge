import { getRepository, Repository } from 'typeorm';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import ICreateCountriesDTO from '@modules/countries/dtos/ICreateCountryDTO';

import Country from '../entities/Country';

class CountriesRepository implements ICountriesRepository {
  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }

  public async create({
    name,
    image_url,
  }: ICreateCountriesDTO): Promise<Country> {
    const country = this.ormRepository.create({ name, image_url });

    await this.ormRepository.save(country);

    return country;
  }
}

export default CountriesRepository;
