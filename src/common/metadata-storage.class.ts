import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';

const BASE_KEY = 'nestjs-relay';
const METHOD_KEY = 'method';
const METHOD_METADATA_KEY = `${BASE_KEY}:${METHOD_KEY}`;

export interface MethodIdentifier {
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Object;
  key: string | symbol;
}

export type ParameterMetadata = Omit<ArgsOptions, 'type'> & {
  typeFunc: ReturnTypeFunc;
  paramIndex: number;
};

export class MetadataStorage {
  static addMethodMetadata(args: MethodIdentifier & ParameterMetadata): void {
    const { target, key, ...data } = args;
    const existingMetadata = MetadataStorage.getMethodMetadata({ target, key });
    const metadata = [...existingMetadata, data];
    Reflect.defineMetadata(METHOD_METADATA_KEY, metadata, target, key);
  }
  static getMethodMetadata({ target, key }: MethodIdentifier): ParameterMetadata[] {
    return Reflect.getMetadata(METHOD_METADATA_KEY, target, key) || [];
  }
}
