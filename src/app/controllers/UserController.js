import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      num_casa: Yup.string().required(),
      telefone: Yup.string().required(),
      nome_loja: Yup.string(),
      cnpj: Yup.string().max(12),
      telefone_loja: Yup.string(),
      endereco_loja: Yup.string(),
      login: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Dados Inválidos' });
    }

    const userExiste = await User.findOne({ where: { login: req.body.login } });

    if (userExiste) {
      return res.status(400).json({ error: 'Usuario existe!' });
    }

    const {
      id,
      nome,
      login,
      email,
      provider,
      nome_loja,
      cnpj,
    } = await User.create(req.body);

    return res.json({
      id,
      nome,
      login,
      email,
      nome_loja,
      cnpj,
      provider,
    });
  }
}

export default new UserController();
