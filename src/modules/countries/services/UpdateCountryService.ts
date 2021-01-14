import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import Country from '../infra/typeorm/entities/Country';

import ICountriesRepository from '../repositories/ICountriesRepository';

interface IRequest {
  country_id: number;
  name: string;
  image_url: string;
}

@injectable()
class UpdateCountryService {
  constructor(
    @inject('CountriesRepository')
    private countriesRepository: ICountriesRepository,
  ) {
    /** */
  }

  public async execute({
    country_id,
    name,
    image_url,
  }: IRequest): Promise<Country> {
    const country = await this.countriesRepository.findCountryById(country_id);

    if (!country) {
      throw new AppError('Country does not exists!', 404);
    }

    country.name = name;

    country.image_url = image_url;

    return this.countriesRepository.save(country);
  }
}

export default UpdateCountryService;
