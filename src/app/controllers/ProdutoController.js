import Produto from '../models/Produtos';
import User from '../models/User';
import File from '../models/File';

class ProdutoController {
  async store(req, res) {
    const user_id = req.userId;

    const isProvider = await User.findOne({
      where: { id: user_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Não é possivel cadastrar produto sem ser Loja' });
    }

    const { nome_produto, quantidade, preco, avatar_id } = req.body;

    const { url, nome } = avatar_id;

    await Produto.create({
      nome_produto,
      quantidade,
      preco,
      user_id,
      avatar_id,
    });

    return res.json({
      nome_produto,
      quantidade,
      preco,
      user_id,
      avatar_id,
      url,
      nome,
    });
  }

  async index(request, response) {
    const produtos = await Produto.findAll({
      attributes: ['id', 'nome_produto', 'quantidade', 'preco'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['nome', 'path', 'url'],
        },
        {
          model: User,
          as: 'users',
          attributes: ['id', 'nome_loja', 'telefone_loja'],
        },
      ],
    });

    return response.json(produtos);
  }
}

export default new ProdutoController();
