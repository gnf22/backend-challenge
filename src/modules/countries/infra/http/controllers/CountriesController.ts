import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCountryService from '@modules/countries/services/CreateCountryService';
import FindCountriesService from '@modules/countries/services/FindCountriesService';

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

  async show(request: Request, response: Response): Promise<Response> {
    const findCountries = container.resolve(FindCountriesService);

    const countries = await findCountries.execute();

    return response.json(countries);
  }
}
