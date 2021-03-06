import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login } });

    // verificando se o login bate
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    // verificando se as senhas batem
    if (!(await user.checarSenha(password))) {
      return res.status(401).json({ error: 'Senha incompativel! ' });
    }

    const {
      id,
      nome,
      provider,
      nome_loja,
      telefone_loja,
      endereco_loja,
    } = user;

    if (provider) {
      return res.json({
        user: {
          id,
          nome,
          provider,
          nome_loja,
          telefone_loja,
          endereco_loja,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }

    if (!provider) {
      return res.json({
        user: {
          id,
          nome,
          provider,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }
  }
}

export default new SessionController();
