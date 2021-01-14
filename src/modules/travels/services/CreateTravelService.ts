import { inject, injectable } from 'tsyringe';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import AppError from '@shared/errors/AppError';
import Travel from '../infra/typeorm/entities/Travel';

import ITravelsRepository from '../repositories/ITravelsRepository';

interface IRequest {
  country_id: number;
  local: string;
  meta: string;
}

@injectable()
class CreateTravelService {
  constructor(
    @inject('TravelsRepository')
    private travelsRepository: ITravelsRepository,

    @inject('CountriesRepository')
    private countriesRepository: ICountriesRepository,
  ) {
    /** */
  }

  public async execute({ country_id, local, meta }: IRequest): Promise<Travel> {
    const checkCountryExists = await this.countriesRepository.findCountryById(
      country_id,
    );

    if (!checkCountryExists) {
      throw new AppError('Country ID does not exist!', 404);
    }

    const checkLocalByIdExists = await this.travelsRepository.findLocalById(
      country_id,
      local,
    );

    if (checkLocalByIdExists) {
      throw new AppError('This local is already chosen for this country!', 409);
    }

    const travel = await this.travelsRepository.create({
      country_id,
      local,
      meta,
    });

    return travel;
  }
}

export default CreateTravelService;
