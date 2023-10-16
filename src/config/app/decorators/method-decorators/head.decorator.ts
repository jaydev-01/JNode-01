import { RouteDefinition } from "../../Interfaces/router-definition.interface";
import "reflect-metadata";

export const HEAD = (path: string): MethodDecorator => {
  return (target: any, propertyKey: string | symbol): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    const routes = Reflect.getMetadata(
      "routes",
      target.constructor
    ) as Array<RouteDefinition>;

    const overrideControllerPrefix = Reflect.hasMetadata(
      "ignore_controller_prefix",
      target.constructor,
      propertyKey
    );
    routes.push({
      requestMethod: "head",
      path,
      methodName: propertyKey,
      overrideControllerPrefix: overrideControllerPrefix,
    });
    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};
