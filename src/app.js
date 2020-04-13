import express from 'express';
import path from 'path';
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
    this.server.use(
      '/avatar',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );

    this.server.use(cors());
  }

  routes() {
    // Rotas
    this.server.use(routes);
  }
}

export default new App().server;
