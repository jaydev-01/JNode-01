import { Controller } from "../../config/app/decorators/core";
import {
  Get,
  OverrideControllerPrefix,
} from "../../config/app/decorators/http";

@Controller("/users")
export class UserController {
  @Get("/u1")
  @OverrideControllerPrefix()
  async get(): Promise<string> {
    return "Hello from User!";
  }
}
