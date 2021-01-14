import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTravelService from '@modules/travels/services/CreateTravelService';
import FindTravelsService from '@modules/travels/services/FindTravelsService';
import UpdateTravelService from '@modules/travels/services/UpdateTravelService';
import RemoveTravelService from '@modules/travels/services/RemoveTravelService';

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

  async index(request: Request, response: Response): Promise<Response> {
    const findTravel = container.resolve(FindTravelsService);

    const travels = await findTravel.execute();

    return response.json(travels);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { local, meta } = request.body;

    const { id } = request.params;

    const updateTravel = container.resolve(UpdateTravelService);

    const travel = await updateTravel.execute({
      travel_id: Number(id),
      local,
      meta,
    });

    return response.json(travel);
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeTravel = container.resolve(RemoveTravelService);

    await removeTravel.execute({
      travel_id: Number(id),
    });

    return response.json();
  }
}
