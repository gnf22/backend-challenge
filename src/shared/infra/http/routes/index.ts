import { Router } from 'express';

import countriesRouter from '@modules/countries/infra/http/routes/countries.routes';
import travelsRouter from '@modules/travels/infra/http/routes/travels.routes';

const routes = Router();

routes.use('/countries', countriesRouter);
routes.use('/travels', travelsRouter);

export default routes;
