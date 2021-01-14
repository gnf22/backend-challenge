import { Router } from 'express';

import CountriesController from '../controllers/CountriesController';

const countriesRouter = Router();

const countriesController = new CountriesController();

countriesRouter.post('/', countriesController.create);

export default countriesRouter;
