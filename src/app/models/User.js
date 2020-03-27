import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        rua: Sequelize.STRING,
        num_casa: Sequelize.STRING,
        telefone: Sequelize.STRING,
        nome_loja: Sequelize.STRING,
        cnpj: Sequelize.STRING(15),
        telefone_loja: Sequelize.STRING,
        endereco_loja: Sequelize.STRING,
        login: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checarSenha(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
