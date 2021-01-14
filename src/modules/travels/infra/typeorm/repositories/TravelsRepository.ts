import { getRepository, Repository } from 'typeorm';

import ITravelsRepository from '@modules/travels/repositories/ITravelsRepository';
import ICreateTravelDTO from '@modules/travels/dtos/ICreateTravelDTO';

import Travel from '../entities/Travel';

class TravelsRepository implements ITravelsRepository {
  private ormRepository: Repository<Travel>;

  constructor() {
    this.ormRepository = getRepository(Travel);
  }

  public async findAllTravels(): Promise<Travel[]> {
    const travels = await this.ormRepository.find({ relations: ['country'] });

    return travels;
  }

  public async findLocalById(
    country_id: number,
    local: string,
  ): Promise<Travel | undefined> {
    const travel = this.ormRepository.findOne({ where: { country_id, local } });

    return travel;
  }

  public async findTravelById(id: number): Promise<Travel | undefined> {
    const travel = this.ormRepository.findOne(id);

    return travel;
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

  public async save(travel: Travel): Promise<Travel> {
    return this.ormRepository.save(travel);
  }

  public async remove(id: number): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default TravelsRepository;
