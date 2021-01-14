import Country from '../infra/typeorm/entities/Country';
import ICreateCountryDTO from '../dtos/ICreateCountryDTO';

export default interface ICountriesDTO {
  create(data: ICreateCountryDTO): Promise<Country>;
  findAllCountries(): Promise<Country[]>;
  findCountryById(id: number): Promise<Country | undefined>;
  findCountryByName(name: string): Promise<Country | undefined>;
}
