import ITravelsRepository from '@modules/travels/repositories/ITravelsRepository';
import ICreateTravelDTO from '@modules/travels/dtos/ICreateTravelDTO';

import Travel from '../../infra/typeorm/entities/Travel';

class TravelsRepository implements ITravelsRepository {
  private travels: Travel[] = [];

  public async findAllTravels(): Promise<Travel[]> {
    return this.travels;
  }

  public async findLocalById(
    country_id: number,
    local: string,
  ): Promise<Travel | undefined> {
    const findLocal = this.travels.find(
      travel => travel.country_id === country_id && travel.local === local,
    );

    return findLocal;
  }

  public async findTravelById(id: number): Promise<Travel | undefined> {
    const findTravel = this.travels.find(travel => travel.id === id);

    return findTravel;
  }

  public async create({
    country_id,
    local,
    month,
    year,
  }: ICreateTravelDTO): Promise<Travel> {
    const travel = new Travel();

    const id = this.travels.length + 1;

    Object.assign(travel, { id, country_id, local, month, year });

    this.travels.push(travel);

    return travel;
  }

  public async save(travel: Travel): Promise<Travel> {
    const findIndex = this.travels.findIndex(
      findTravel => findTravel.id === travel.id,
    );

    this.travels[findIndex] = travel;

    return travel;
  }

  public async remove(id: number): Promise<void> {
    const travelIndex = this.travels.findIndex(travel => travel.id === id);

    this.travels.splice(travelIndex, 1);
  }
}

export default TravelsRepository;
