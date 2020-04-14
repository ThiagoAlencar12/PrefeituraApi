import Sequelize, { Model } from 'sequelize';

class Compra extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        status: Sequelize.BOOLEAN,
        quantidade: Sequelize.INTEGER,
      },
      {
        sequelize,
        // tableName: 'compras',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Produtos, {
      foreignKey: 'produto_id',
      as: 'produto',
    });
  }
}

export default Compra;
