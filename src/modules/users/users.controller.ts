import { Controller } from "../../config/app/decorators/class-decorators";
import {
  Get,
  OverrideControllerPrefix,
} from "../../config/app/decorators/method-decorators";

@Controller("/users")
export class UserController {
  @Get("/u1")
  @OverrideControllerPrefix()
  async get(): Promise<string> {
    return "Hello from User!";
  }
}
