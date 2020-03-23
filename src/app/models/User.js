import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      rua: Sequelize.STRING,
      num_casa: Sequelize.NUMBER,
      telefone: Sequelize.STRING,
      login: Sequelize.STRING,
      password: Sequelize.STRING,

    },
    {
      sequelize,
    }
    
    );
  }
}

export default User;