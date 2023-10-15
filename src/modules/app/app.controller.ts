import { Get } from "../../config/decorators/method-decorators";
import { Controller } from "../../config/decorators/class-decorators";
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
}
