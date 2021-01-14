import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import Country from '../infra/typeorm/entities/Country';

import ICountriesRepository from '../repositories/ICountriesRepository';

interface IRequest {
  name: string;
  image_url: string;
}

@injectable()
class CreateCountryService {
  constructor(
    @inject('CountriesRepository')
    private countriesRepository: ICountriesRepository,
  ) {
    /** */
  }

  public async execute({ name, image_url }: IRequest): Promise<Country> {
    const checkCountryNameExists = await this.countriesRepository.findCountryByName(
      name,
    );

    if (checkCountryNameExists) {
      throw new AppError('Country already exists!', 409);
    }

    const country = await this.countriesRepository.create({
      name,
      image_url,
    });

    return country;
  }
}

export default CreateCountryService;
