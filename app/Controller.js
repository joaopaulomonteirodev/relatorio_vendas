class Controller{

  /*
routes.get('/categorias', Controller.categorias);
routes.get('/categorias/:categoriaId/produtos', Controller.produtosCategoria);
routes.get('/categorias/:categoriaId/produtos/:produtoId/marcas', Controller.marcasProdutoCategoria);
routes.get('/categorias/:categoriaId/produtos/:produtoId/marcas/:marcaID/vendas', Controller.vendasMarcaProdutoCategoria);

  */
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