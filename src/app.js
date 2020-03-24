import express from 'express';
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
  }

  routes() {
    // Rotas
    this.server.use(routes);
  }
}

export default new App().server;
