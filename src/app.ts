import express, { Application, Request, Response } from 'express';

export class App {
  public application: Application;

  constructor() {
    this.application = express();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares(): void {
    this.application.use(express.json());
  }

  private configureRoutes(): void {
    //this.app.use(routes);
    console.log('routes!')
  }
  
}


