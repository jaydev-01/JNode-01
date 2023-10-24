import { RouteDefinition } from "../../Interfaces/router-definition.interface";
import "reflect-metadata";
import { RequestMethods } from "../../enums/request-method.enum";
import { RequestMethodsMetadata } from "../../Interfaces/request-method.interface";

// Default meta data
const defaultMetadata = {
  method: RequestMethods.GET,
  path: "/",
};
// -----------------

// method to create Request method decorator
export const requestMethod = (
  metadata: RequestMethodsMetadata = defaultMetadata
): MethodDecorator => {
  let path = metadata.path;
  let requestMethod = metadata.method;
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }
    let routes = Reflect.getMetadata(
      "routes",
      target.constructor
    ) as Array<RouteDefinition>;

    const overrideControllerPrefix = Reflect.hasMetadata(
      "ignore_controller_prefix",
      target.constructor,
      propertyKey
    );
    routes.push({
      requestMethod,
      path,
      methodName: propertyKey,
      overrideControllerPrefix: overrideControllerPrefix,
    });
    Reflect.defineMetadata(
      "routes",
      routes,
      target.constructor,
      descriptor.value
    );
  };
};

const createRequestMethodDecorator =
  (method: RequestMethods) =>
  (path: string = "/"): MethodDecorator => {
    return requestMethod({ method: method, path: path });
  };

export const Get = createRequestMethodDecorator(RequestMethods.GET);

export const Post = createRequestMethodDecorator(RequestMethods.POST);

export const Put = createRequestMethodDecorator(RequestMethods.PUT);

export const Patch = createRequestMethodDecorator(RequestMethods.PATCH);

export const Delete = createRequestMethodDecorator(RequestMethods.DELETE);

export const Head = createRequestMethodDecorator(RequestMethods.HEAD);

export const Options = createRequestMethodDecorator(RequestMethods.OPTIONS);

// ----------------------------------------------------------------

// decorator to avoid controller prefix
export const OverrideControllerPrefix = (): MethodDecorator => {
  return (target: any, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(
      "ignore_controller_prefix",
      true,
      target.constructor,
      propertyKey
    );
  };
};
