import User from '../models/User';
import File from '../models/File';

class LojaController {
  async index(request, response) {
    const user_id = request.userId;

    const isProvider = await User.findOne({
      where: { id: user_id, provider: true },
    });

    if (isProvider) {
      return response
        .status(401)
        .json({ message: 'Não podemos listar lojas para um user Loja' });
    }

    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'nome_loja', 'cnpj', 'telefone_loja', 'endereco_loja'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['nome', 'path', 'url'],
        },
      ],
    });

    return response.json(providers);
  }
}

export default new LojaController();
