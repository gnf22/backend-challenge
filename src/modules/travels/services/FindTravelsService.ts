import { inject, injectable } from 'tsyringe';

import Travel from '../infra/typeorm/entities/Travel';

import ITravelsRepository from '../repositories/ITravelsRepository';

@injectable()
class FindTravelsService {
  constructor(
    @inject('TravelsRepository')
    private travelsRepository: ITravelsRepository,
  ) {
    /** */
  }

  public async execute(): Promise<Travel[]> {
    const travel = await this.travelsRepository.findAllTravels();

    return travel;
  }
}

export default FindTravelsService;
