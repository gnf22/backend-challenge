import Travel from '../infra/typeorm/entities/Travel';
import ICreateTravelDTO from '../dtos/ICreateTravelDTO';

export default interface ITravelsRepository {
  create(data: ICreateTravelDTO): Promise<Travel>;
}
