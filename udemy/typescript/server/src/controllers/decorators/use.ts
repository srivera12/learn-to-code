// imports
import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';
import { RequestHandler } from 'express';

// decorator function for middlewares
export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
  };
}
