import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import UserLojaController from './app/controllers/UserLojaController';

const routes = new Router();

routes.post('/login', SessionController.store);

// rotas de cadastro
routes.post('/users', UserController.store);
routes.post('/usersLoja', UserLojaController.store);

export default routes;
