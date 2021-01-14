import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Travel from '../infra/typeorm/entities/Travel';

import ITravelsRepository from '../repositories/ITravelsRepository';

interface IRequest {
  travel_id: number;
  local: string;
  meta: string;
}

@injectable()
class UpdateTravelService {
  constructor(
    @inject('TravelsRepository')
    private travelsRepository: ITravelsRepository,
  ) {
    /** */
  }

  public async execute({ travel_id, local, meta }: IRequest): Promise<Travel> {
    const travel = await this.travelsRepository.findTravelById(travel_id);

    if (!travel) {
      throw new AppError('Travel does not exist!');
    }

    travel.local = local;
    travel.meta = meta;

    const checkLocalByIdExists = await this.travelsRepository.findLocalById(
      travel_id,
      local,
    );

    if (checkLocalByIdExists) {
      throw new AppError('This local is already chosen for this country!');
    }

    return this.travelsRepository.save(travel);
  }
}

export default UpdateTravelService;
