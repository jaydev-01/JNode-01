import { Controller } from "../../config/app/decorators/class-decorators";
import { Get } from "../../config/app/decorators/method-decorators";
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
