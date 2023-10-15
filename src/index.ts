import App from "./config/app/app";
import { UserController } from "./modules/users/users.controller";

function startApp() {
  const app: App = new App([UserController]);
}

startApp();
