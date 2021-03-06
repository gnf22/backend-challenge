import { Router } from 'express';

import TravelsController from '../controllers/TravelsController';

const travelsRouter = Router();

const travelsController = new TravelsController();

travelsRouter.post('/', travelsController.create);

travelsRouter.get('/', travelsController.index);

travelsRouter.put('/:id', travelsController.update);

travelsRouter.delete('/:id', travelsController.destroy);

export default travelsRouter;
