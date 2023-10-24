import { RequestMethods } from "../enums/request-method.enum";

export interface RequestMethodsMetadata {
  path?: string;
  method: RequestMethods;
}
