import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
import { MetadataStorage } from './metadata-storage.class';

export type RelayArgOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type' | 'defaultValue'>;

export function RelayArg<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayArgOptions,
): ParameterDecorator {
  return (target: Object | Function, key: string | symbol, paramIndex: number) => {
    MetadataStorage.addMethodMetadata({
      ...options,
      typeFunc,
      target,
      key,
      paramIndex,
    });
  };
}
