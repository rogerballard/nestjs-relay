import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
import { MetadataStorage } from './metadata-storage.class';

export type InputArgOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type' | 'defaultValue'>;

export function InputArg<T>(
  typeFunc: ReturnTypeFunc,
  options?: InputArgOptions,
): ParameterDecorator {
  return (target: Record<string, any>, key: string | symbol, paramIndex: number) => {
    MetadataStorage.addMethodMetadata({
      ...options,
      typeFunc,
      target,
      key,
      paramIndex,
    });
  };
}
