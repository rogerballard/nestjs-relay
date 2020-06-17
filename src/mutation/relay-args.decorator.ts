import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
import { MetadataStorage } from './metadata-storage.class';

export type RelayArgsOptions = Omit<ArgsOptions, 'type'>;

export function RelayArgs<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayArgsOptions,
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
