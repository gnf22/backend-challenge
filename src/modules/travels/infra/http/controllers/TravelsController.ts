import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTravelService from '@modules/travels/services/CreateTravelService';
import FindTravelsService from '@modules/travels/services/FindTravelsService';

export default class TravelsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { country_id, local, meta } = request.body;

    const createTravel = container.resolve(CreateTravelService);

    const travel = await createTravel.execute({
      country_id,
      local,
      meta,
    });

    return response.json(travel);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const findTravel = container.resolve(FindTravelsService);

    const travels = await findTravel.execute();

    return response.json(travels);
  }
}
