import Country from '../infra/typeorm/entities/Country';
import ICreateCountryDTO from '../dtos/ICreateCountryDTO';

export default interface ICountriesDTO {
  create(data: ICreateCountryDTO): Promise<Country>;
  findById(id: number): Promise<Country | undefined>;
  findAllCountries(): Promise<Country[]>;
}
