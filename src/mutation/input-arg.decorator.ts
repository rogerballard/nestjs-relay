import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql';
import { MetadataStorage } from '../common/metadata-storage.class';

export type InputArgOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type' | 'defaultValue'>;

export function InputArg<T>(
  typeFunc: ReturnTypeFunc,
  options?: InputArgOptions,
): ParameterDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Object, key: string | symbol, paramIndex: number) => {
    MetadataStorage.addMethodMetadata({
      ...options,
      typeFunc,
      target,
      key,
      paramIndex,
    });
  };
}
