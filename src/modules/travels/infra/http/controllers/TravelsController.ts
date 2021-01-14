import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTravelService from '@modules/travels/services/CreateTravelService';

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
}
