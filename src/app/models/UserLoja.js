import Sequelize, { Model } from 'sequelize';

class UserLoja extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING(15),
        telefone: Sequelize.STRING,
        endereco: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default UserLoja;
