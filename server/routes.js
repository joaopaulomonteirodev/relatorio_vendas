import { Router } from 'express';

import Controller from './Controller';

const routes = new Router();

routes.get('/categorias', Controller.categorias);
routes.get('/categorias/:categoriaId/produtos', Controller.produtosCategoria);
routes.get('/categorias/:categoriaId/produtos/:produtoId/marcas', Controller.marcasProdutoCategoria);
routes.get('/categorias/:categoriaId/produtos/:produtoId/marcas/:marcaID/vendas', Controller.vendasMarcaProdutoCategoria);

module.exports = routes;