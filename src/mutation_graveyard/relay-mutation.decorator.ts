import { ReturnTypeFunc, MutationOptions, Mutation, ArgsOptions, Args } from '@nestjs/graphql';
import { PayloadMixin } from './payload.mixin';
import { InputMixin } from './input.mixin';
import { AnyConstructor } from './types';
import { getClientMutationId } from './helpers';
import { Storage } from './storage.helper';

export type RelayMutationOptions = Omit<MutationOptions, 'nullable'>;

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayMutationOptions,
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: PropertyDescriptor) => {
    const outputType = typeFunc() as AnyConstructor;
    const mutationName = options?.name ? options.name : String(key);

    const inputParamData = Storage.fetchParamData({ target, key });
    if (inputParamData) {
      const type = inputParamData.typeFunc() as AnyConstructor;
      const input = InputMixin(type, { mutationName });
      const argsOptions: ArgsOptions = {
        ...options,
        name: 'input',
        nullable: false,
        type: () => input,
      };
      Args(argsOptions)(target, key, inputParamData.paramIndex);
    }

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const clientMutationId = getClientMutationId(args);
      const methodResult = originalMethod.apply(this, args);
      return { ...methodResult, clientMutationId };
    };

    const payload = PayloadMixin(outputType, { mutationName });
    const mutationOptions: MutationOptions = {
      ...options,
      name: mutationName,
      nullable: true,
    };

    Mutation(() => payload, mutationOptions)(target, key, descriptor);
  };
}
