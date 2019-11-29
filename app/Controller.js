class Controller{

  async categorias(req, res){
    res.json({ok: true});
  }

  async produtosCategoria(req, res){
    res.json({ok: true});
  }

  async marcasProdutoCategoria(req, res){
    res.json({ok: true});
  }

  async vendasMarcaProdutoCategoria(req, res){
    res.json({ok: true});
  }
}

export default new Controller();