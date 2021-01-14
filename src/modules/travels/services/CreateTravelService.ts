import { inject, injectable } from 'tsyringe';

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
  ) {
    /** */
  }

  public async execute({ country_id, local, meta }: IRequest): Promise<Travel> {
    const travel = await this.travelsRepository.create({
      country_id,
      local,
      meta,
    });

    return travel;
  }
}

export default CreateTravelService;
