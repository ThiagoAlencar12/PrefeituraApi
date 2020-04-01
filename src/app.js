import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Operadores Globais
    this.server.use(express.json()); // Declarando somente respostas json
    this.server.use(cors());
  }

  routes() {
    // Rotas
    this.server.use(routes);
  }
}

export default new App().server;
