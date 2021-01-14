import { container } from 'tsyringe';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import CountriesRepository from '@modules/countries/infra/typeorm/repositories/CountriesRepository';

import ITravelsRepository from '@modules/travels/repositories/ITravelsRepository';
import TravelsRepository from '@modules/travels/infra/typeorm/repositories/TravelsRepository';

container.registerSingleton<ICountriesRepository>(
  'CountriesRepository',
  CountriesRepository,
);

container.registerSingleton<ITravelsRepository>(
  'TravelsRepository',
  TravelsRepository,
);
