import { ReturnTypeFunc, MutationOptions, Mutation, ArgsOptions, Args } from '@nestjs/graphql';
import { AnyConstructor } from './mixins/types';
import { getClientMutationId } from './utils';

export type RelayMutationOptions = Omit<MutationOptions, 'nullable'>;

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayMutationOptions,
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: PropertyDescriptor) => {
    const outputType = typeFunc() as AnyConstructor;
    const mutationName = options?.name ? options.name : String(key);

    /**
     * Input Type
     * -> Construct
     * -> Register - how?
     */
    const inputType: AnyConstructor;

    /**
     * Payload Type
     * -> Construct
     * -> Register
     */
    const payloadType: AnyConstructor;
    const mutationOptions: MutationOptions = {
      ...options,
      name: mutationName,
      nullable: true,
    };
    Mutation(() => payloadType, mutationOptions)(target, key, descriptor);

    /**
     * Intercept Resolver
     * -> Pass clientMutationId to response
     */
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const clientMutationId = getClientMutationId(args);
      const methodResult = originalMethod.apply(this, args);
      return { ...methodResult, clientMutationId };
    };
  };
}
