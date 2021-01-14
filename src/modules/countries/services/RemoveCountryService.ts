import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import ICountriesRepository from '../repositories/ICountriesRepository';

interface IRequest {
  country_id: number;
}

@injectable()
class RemoveCountryService {
  constructor(
    @inject('CountriesRepository')
    private countriesRepository: ICountriesRepository,
  ) {
    /** */
  }

  public async execute({ country_id }: IRequest): Promise<void> {
    const country = await this.countriesRepository.findCountryById(country_id);

    if (!country) {
      throw new AppError('Country does not exist!');
    }

    await this.countriesRepository.remove(country_id);
  }
}

export default RemoveCountryService;
