import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_produto: Sequelize.STRING,
        quantidade: Sequelize.INTEGER,
        preco: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Produto;
