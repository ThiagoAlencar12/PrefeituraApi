import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProdutoController from './app/controllers/ProdutoController';
import authentication from './app/middlewares/auth';

const routes = new Router();
// rota de login
routes.post('/login', SessionController.store);

// rotas de cadastro
routes.post('/users', UserController.store);

routes.use(authentication);

// rota de cadastro de produto
routes.post('/produto', ProdutoController.store);

export default routes;
