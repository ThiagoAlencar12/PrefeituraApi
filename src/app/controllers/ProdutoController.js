import Produto from '../models/Produtos';
import User from '../models/User';

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

    console.log(avatar_id);

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
    });
  }
}

export default new ProdutoController();
