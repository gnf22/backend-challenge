import Country from '../infra/typeorm/entities/Country';
import ICreateCountryDTO from '../dtos/ICreateCountryDTO';

export default interface ICountriesDTO {
  create(data: ICreateCountryDTO): Promise<Country>;
}
