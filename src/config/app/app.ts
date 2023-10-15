import express from "express";
import Config from "../config";
import { RouteDefinition } from "../Interfaces/router-definition.interface";
import AppController from "../../modules/app/app.controller";

export default class App {
  private app: express.Application;
  private config: Config;
  private controllers: Array<any>;

  constructor(controllers: Array<any>) {
    this.app = express();
    this.config = new Config();
    this.controllers = controllers;
    this.controllers.push(AppController);

    this.controllers.forEach((controller) => {
      const instance = new controller();
      const routes: Array<RouteDefinition> = Reflect.getMetadata(
        "routes",
        controller
      );
      const prefix = Reflect.getMetadata("prefix", controller);
      routes.forEach((route) => {
        this.app[route.requestMethod](
          prefix === "/app"
            ? route.path
            : route.overrideControllerPrefix
            ? route.path
            : prefix + route.path,
          async (req: express.Request, res: express.Response) => {
            const response = await instance[route.methodName](req, res);
            if (response) {
              res.status(200).send(response);
            }
          }
        );
      });
      this.app.use(async (req: express.Request, res: express.Response) => {
        res.status(404).send({
          message: `Router ${req.path} of method ${req.method} not found!`,
        });
      });
    });
    this.app.listen(this.config.get("PORT"), () => {
      console.log("listening on port " + this.config.get("PORT"));
    });
  }
}
