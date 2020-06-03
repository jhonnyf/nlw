import express, { request, response } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * ITEMS
 */
routes.get('/items', itemsController.index);

/**
 * POINTS
 */
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;