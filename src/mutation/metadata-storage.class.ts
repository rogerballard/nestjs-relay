import 'reflect-metadata';
import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';

export interface MethodIdentifier {
  target: Object;
  key: string | symbol;
}

export type ParamData = Omit<ArgsOptions, 'name' | 'nullable' | 'type'> & {
  typeFunc: ReturnTypeFunc;
  paramIndex: number;
};

const METADATA_KEY = 'nestjs-relay:method';

export class MetadataStorage {
  static store(args: MethodIdentifier & ParamData): void {
    const { target, key, ...data } = args;
    Reflect.defineMetadata(METADATA_KEY, data, target, key);
  }
  static read({ target, key }: MethodIdentifier): void {
    return Reflect.getMetadata(METADATA_KEY, target, key);
  }
}
