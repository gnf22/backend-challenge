import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITravelsRepository from '../repositories/ITravelsRepository';

interface IRequest {
  travel_id: number;
}

@injectable()
class RemoveTravelService {
  constructor(
    @inject('TravelsRepository')
    private travelsRepository: ITravelsRepository,
  ) {
    /** */
  }

  public async execute({ travel_id }: IRequest): Promise<void> {
    const travel = await this.travelsRepository.findTravelById(travel_id);

    if (!travel) {
      throw new AppError('Travel does not exist!');
    }

    await this.travelsRepository.remove(travel_id);
  }
}

export default RemoveTravelService;
