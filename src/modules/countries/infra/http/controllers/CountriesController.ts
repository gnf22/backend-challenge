import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCountryService from '@modules/countries/services/CreateCountryService';

export default class CountriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, image_url } = request.body;

    const createCountry = container.resolve(CreateCountryService);

    const country = await createCountry.execute({
      name,
      image_url,
    });

    return response.json(country);
  }
}
