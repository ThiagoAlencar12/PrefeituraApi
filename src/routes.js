import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProdutoController from './app/controllers/ProdutoController';
import FileController from './app/controllers/FileController';
import LojaController from './app/controllers/LojaController';
import CompraController from './app/controllers/CompraController';
import authentication from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// rota de login
routes.post('/login', SessionController.store);

// rotas de cadastro
routes.post('/users', UserController.store);

// Rota de autenticação,
routes.use(authentication);

routes.get('/lojas', LojaController.index);

routes.post('/compras', CompraController.store);
routes.get('/compras', CompraController.index);

// rota de cadastro de produto
routes.post('/produto', ProdutoController.store);
routes.get('/produto', ProdutoController.index);

routes.post('/files', upload.single('avatar'), FileController.store);

export default routes;
