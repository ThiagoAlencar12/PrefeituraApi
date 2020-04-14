import Compra from '../models/Compra';
import User from '../models/User';
import Produtos from '../models/Produtos';

class CompraController {
  async store(request, response) {
    const user_id = request.userId;

    const { data, status, produto_id, quantidade } = request.body;

    const { nome_loja } = user_id;

    const { nome_produto } = produto_id;

    const checkProvider = await User.findOne({
      where: { id: user_id, provider: true },
    });

    if (checkProvider) {
      return response
        .status(401)
        .json({ message: 'Usuário Loja não pode fazer compras' });
    }

    await Compra.create({
      data,
      status,
      user_id,
      produto_id,
      quantidade,
    });

    return response.json({
      data,
      status,
      user_id,
      nome_loja,
      produto_id,
      nome_produto,
      quantidade,
    });
  }

  async index(request, response) {
    const compras = await Compra.findAll({
      attributes: ['id', 'produto_id', 'user_id', 'status', 'quantidade'],
      include: [
        {
          model: Produtos,
          as: 'produto',
          attributes: ['nome_produto', 'preco'],
          include: [
            {
              model: User,
              as: 'users',
              attributes: ['id', 'nome_loja'],
            },
          ],
        },
      ],
    });

    return response.json(compras);
  }
}

export default new CompraController();
