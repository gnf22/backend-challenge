import { Router } from 'express';

import countriesRouter from '@modules/countries/infra/http/routes/countries.routes';

const routes = Router();

routes.use('/countries', countriesRouter);

export default routes;
