import User from '../models/User';
import File from '../models/File';

class LojaController {
  async index(request, response) {
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
