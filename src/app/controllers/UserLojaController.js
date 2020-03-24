import * as Yup from 'yup';
import UserLoja from '../models/UserLoja';

class UserLojaController {
  // Rota de cadastro
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cnpj: Yup.string().required().max(15),
      telefone: Yup.string().required(),
      endereco: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Dados Inválidos!' });
    }

    const lojaExiste = await UserLoja.findOne({
      where: { nome: req.body.nome },
    });

    if (lojaExiste) {
      return res.status(400).json({ error: 'Loja já existe' });
    }

    const { id, nome, cnpj } = await UserLoja.create(req.body);

    return res.json({
      id,
      nome,
      cnpj,
    });
  }
}

export default new UserLojaController();
