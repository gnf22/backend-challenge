import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCountryService from '@modules/countries/services/CreateCountryService';
import FindCountriesService from '@modules/countries/services/FindCountriesService';
import UpdateCountryService from '@modules/countries/services/UpdateCountryService';

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

  async index(request: Request, response: Response): Promise<Response> {
    const findCountries = container.resolve(FindCountriesService);

    const countries = await findCountries.execute();

    return response.json(countries);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { name, image_url } = request.body;

    const { id } = request.params;

    const updateCountry = container.resolve(UpdateCountryService);

    const country = await updateCountry.execute({
      country_id: Number(id),
      name,
      image_url,
    });

    return response.json(country);
  }
}
