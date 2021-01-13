import { container } from 'tsyringe';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import CountriesRepository from '@modules/countries/infra/typeorm/repositories/CountriesRepository';

container.registerSingleton<ICountriesRepository>(
  'CountriesRepository',
  CountriesRepository,
);
