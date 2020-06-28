import { ReturnTypeFunc, MutationOptions, Mutation, Args } from '@nestjs/graphql';
import { MetadataStorage } from '../common/metadata-storage.class';
import { InputArgFactory } from './input-arg';
import { PayloadTypeFactory } from './payload-type';
import { getClientMutationId } from './utils';

export type RelayMutationOptions = Omit<MutationOptions, 'nullable'>;

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayMutationOptions,
): MethodDecorator {
  return (target: Record<string, any>, key: string | symbol, descriptor: PropertyDescriptor) => {
    const mutationName = options?.name ? options.name : String(key);

    /**
     * Resolver Interceptor
     */
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const clientMutationId = getClientMutationId(args);
      const methodResult = originalMethod.apply(this, args);
      return { ...methodResult, clientMutationId };
    };

    /**
     * Input Type
     */
    const params = MetadataStorage.getMethodMetadata({ target, key });
    const { paramIndex, ...argOptions } = InputArgFactory.create({ params, mutationName });
    const inputArgOptions = {
      name: 'input',
      nullable: false,
      ...argOptions,
    };
    Args(inputArgOptions)(target, key, paramIndex);

    /**
     * Payload Type
     */
    const payloadType = PayloadTypeFactory.create({ typeFunc, mutationName });
    const mutationOptions: MutationOptions = {
      ...options,
      name: mutationName,
      nullable: true,
    };
    Mutation(() => payloadType, mutationOptions)(target, key, descriptor);
  };
}
