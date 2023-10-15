export interface RouteDefinition {
  path: string;
  requestMethod:
    | "get"
    | "post"
    | "put"
    | "delete"
    | "patch"
    | "head"
    | "options";
  methodName: string | symbol;
  overrideControllerPrefix: boolean;
}
