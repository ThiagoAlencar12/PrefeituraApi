import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_produto: Sequelize.STRING,
        quantidade: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Produto;
