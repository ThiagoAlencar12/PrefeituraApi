import Sequelize from 'sequelize';

import User from '../app/models/User';
import UserLoja from '../app/models/UserLoja';
import Produto from '../app/models/Produtos';

import databaseConfig from '../config/database';

const models = [User, UserLoja, Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
