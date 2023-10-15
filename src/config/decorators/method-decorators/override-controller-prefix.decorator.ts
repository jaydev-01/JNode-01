import "reflect-metadata";

export const OVERRIDECONTROLLERPREFIX = (): MethodDecorator => {
  return (target: any, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(
      "ignore_controller_prefix",
      true,
      target.constructor,
      propertyKey
    );
  };
};
