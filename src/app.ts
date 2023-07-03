import express, { Application } from 'express';
import { errorMiddleware } from './app/middlewares/errorHandlerMiddleware';

export class App {
  public application: Application;

  constructor() {
    this.application = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.errorHandler()
  }

  private configureMiddlewares(): void {
    this.application.use(express.json());
  }

  private configureRoutes(): void {
    //this.app.use(routes);
    console.log('routes!')
  }

  private errorHandler(): void {
    this.application.use(errorMiddleware)
  }
  
}


