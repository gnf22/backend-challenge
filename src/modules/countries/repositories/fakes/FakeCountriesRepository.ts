import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import ICreateCountriesDTO from '@modules/countries/dtos/ICreateCountryDTO';

import Country from '../../infra/typeorm/entities/Country';

class CountriesRepository implements ICountriesRepository {
  private countries: Country[] = [];

  public async findAllCountries(): Promise<Country[]> {
    return this.countries;
  }

  public async findCountryById(id: number): Promise<Country | undefined> {
    const findCountry = this.countries.find(country => country.id === id);

    return findCountry;
  }

  public async findCountryByName(name: string): Promise<Country | undefined> {
    const findCountry = this.countries.find(country => country.name === name);

    return findCountry;
  }

  public async create({
    name,
    image_url,
  }: ICreateCountriesDTO): Promise<Country> {
    const country = new Country();

    const id = this.countries.length + 1;

    Object.assign(country, { id, name, image_url });

    this.countries.push(country);

    return country;
  }

  public async save(country: Country): Promise<Country> {
    const findIndex = this.countries.findIndex(
      findCountry => findCountry.id === country.id,
    );

    this.countries[findIndex] = country;

    return country;
  }

  public async remove(id: number): Promise<void> {
    const countryIndex = this.countries.findIndex(country => country.id === id);

    this.countries.splice(countryIndex, 1);
  }
}

export default CountriesRepository;
