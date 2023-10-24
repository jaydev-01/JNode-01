import { Controller } from "../../config/app/decorators/core";
import { Get } from "../../config/app/decorators/http";
import { AppService } from "./app.service";

@Controller("/app")
export default class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = new AppService();
  }

  @Get("/")
  async get(): Promise<string> {
    return this.appService.get();
  }

  @Get("/hello")
  async hello(): Promise<string> {
    return "kesa hain";
  }
}
