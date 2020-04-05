import Sequelize, { Model } from 'sequelize';

class Compra extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: ' user ' });
    this.belongsTo(models.User, { foreignKey: 'produto_id', as: 'produto' });
  }
}

export default Compra;
