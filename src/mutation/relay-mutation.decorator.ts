import { ReturnTypeFunc, MutationOptions, Mutation } from '@nestjs/graphql'
import { PayloadMixin } from './payload.mixin'
import { AnyConstructor, AnyFunction } from './types'
import { getClientMutationId } from './helpers'

export type RelayMutationOptions = Omit<MutationOptions, 'nullable'>

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayMutationOptions
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: PropertyDescriptor) => {
    const outputType = typeFunc() as AnyConstructor
    const mutationName = options?.name ? options.name : String(key)

    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
      const clientMutationId = getClientMutationId(args)
      const methodResult = originalMethod.apply(this, args)
      return { ...methodResult, clientMutationId }
    }

    const payload = PayloadMixin(outputType, { mutationName })
    const mutationOptions: MutationOptions = {
      ...options,
      name: mutationName,
      nullable: true
    }

    Mutation(() => payload, mutationOptions)(target, key, descriptor)
  }
}
