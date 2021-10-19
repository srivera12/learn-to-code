// imports
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';
import { RequestHandler } from 'express';

// establishes required params of methods in controller classes
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

// connects path and REST conventions
function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

// REST conventions
export const del = routeBinder(Methods.del);
export const get = routeBinder(Methods.get);
export const patch = routeBinder(Methods.patch);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
