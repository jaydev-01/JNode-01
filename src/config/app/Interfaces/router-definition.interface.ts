import { RequestMethods } from "../enums/request-method.enum";

export interface RouteDefinition {
  path?: string;
  requestMethod: RequestMethods;
  methodName: string | symbol;
  overrideControllerPrefix: boolean;
}
