import Country from '../infra/typeorm/entities/Country';
import ICreateCountryDTO from '../dtos/ICreateCountryDTO';

export default interface ICountriesDTO {
  findAllCountries(): Promise<Country[]>;
  findCountryById(id: number): Promise<Country | undefined>;
  findCountryByName(name: string): Promise<Country | undefined>;
  create(data: ICreateCountryDTO): Promise<Country>;
  save(country: Country): Promise<Country>;
  remove(id: number): Promise<void>;
}
