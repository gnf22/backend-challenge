import Travel from '../infra/typeorm/entities/Travel';
import ICreateTravelDTO from '../dtos/ICreateTravelDTO';

export default interface ITravelsRepository {
  create(data: ICreateTravelDTO): Promise<Travel>;
  findAllTravels(): Promise<Travel[]>;
  findLocalById(country_id: number, local: string): Promise<Travel | undefined>;
}
