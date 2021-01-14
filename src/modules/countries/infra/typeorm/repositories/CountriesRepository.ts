import { getRepository, Repository } from 'typeorm';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import ICreateCountriesDTO from '@modules/countries/dtos/ICreateCountryDTO';

import Country from '../entities/Country';

class CountriesRepository implements ICountriesRepository {
  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }

  public async findAllCountries(): Promise<Country[]> {
    const countries = await this.ormRepository.find();

    return countries;
  }

  public async findCountryById(id: number): Promise<Country | undefined> {
    const country = await this.ormRepository.findOne(id);

    return country;
  }

  public async findCountryByName(name: string): Promise<Country | undefined> {
    const country = await this.ormRepository.findOne({ where: { name } });

    return country;
  }

  public async create({
    name,
    image_url,
  }: ICreateCountriesDTO): Promise<Country> {
    const country = this.ormRepository.create({ name, image_url });

    await this.ormRepository.save(country);

    return country;
  }

  public async save(country: Country): Promise<Country> {
    return this.ormRepository.save(country);
  }

  public async remove(id: number): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default CountriesRepository;
