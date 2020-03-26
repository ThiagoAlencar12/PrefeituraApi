import * as Yup from 'yup';
import Produto from '../models/Produtos';

class ProdutoController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new ProdutoController();
