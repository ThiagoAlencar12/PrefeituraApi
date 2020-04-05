import User from '../models/User';
import Produto from '../models/Produtos';
import Compra from '../models/Compra';

class CompraController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new CompraController();
