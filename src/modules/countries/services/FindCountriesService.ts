import { inject, injectable } from 'tsyringe';

import Country from '../infra/typeorm/entities/Country';

import ICountriesRepository from '../repositories/ICountriesRepository';

@injectable()
class FindCountriesService {
  constructor(
    @inject('CountriesRepository')
    private countriesRepository: ICountriesRepository,
  ) {
    /** */
  }

  public async execute(): Promise<Country[]> {
    const countries = await this.countriesRepository.findAllCountries();

    return countries;
  }
}

export default FindCountriesService;
