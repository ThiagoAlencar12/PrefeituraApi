import { Router } from 'express';
import UserController from './app/controllers/UserController';
import UserLojaController from './app/controllers/UserLojaController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/usersLoja', UserLojaController.store);

export default routes;
