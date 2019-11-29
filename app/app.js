import Express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = new Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;