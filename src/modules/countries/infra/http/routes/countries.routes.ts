import { Router } from 'express';

import CountriesController from '../controllers/CountriesController';

const countriesRouter = Router();

const countriesController = new CountriesController();

countriesRouter.post('/', countriesController.create);

countriesRouter.get('/', countriesController.index);

countriesRouter.put('/:id', countriesController.update);

countriesRouter.delete('/:id', countriesController.destroy);

export default countriesRouter;
