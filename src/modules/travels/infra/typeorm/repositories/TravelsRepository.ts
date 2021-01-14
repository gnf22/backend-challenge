import { getRepository, Repository } from 'typeorm';

import ITravelsRepository from '@modules/travels/repositories/ITravelsRepository';
import ICreateTravelDTO from '@modules/travels/dtos/ICreateTravelDTO';

import Travel from '../entities/Travel';

class TravelsRepository implements ITravelsRepository {
  private ormRepository: Repository<Travel>;

  constructor() {
    this.ormRepository = getRepository(Travel);
  }

  public async create({
    country_id,
    local,
    meta,
  }: ICreateTravelDTO): Promise<Travel> {
    const travel = this.ormRepository.create({
      country_id,
      local,
      meta,
    });

    await this.ormRepository.save(travel);

    return travel;
  }
}

export default TravelsRepository;
