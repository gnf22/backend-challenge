import Travel from '../infra/typeorm/entities/Travel';
import ICreateTravelDTO from '../dtos/ICreateTravelDTO';

export default interface ITravelsRepository {
  findAllTravels(): Promise<Travel[]>;
  findLocalById(country_id: number, local: string): Promise<Travel | undefined>;
  findTravelById(id: number): Promise<Travel | undefined>;
  create(data: ICreateTravelDTO): Promise<Travel>;
  save(travel: Travel): Promise<Travel>;
  remove(id: number): Promise<void>;
}
