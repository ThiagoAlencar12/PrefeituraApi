import Produto from '../models/Produtos';

class ProdutoController {
  async store(req, res) {
    console.log(req.userId);
    return res.json({ ok: true });
  }
}

export default new ProdutoController();
