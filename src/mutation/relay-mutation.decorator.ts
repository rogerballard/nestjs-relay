import { ReturnTypeFunc, MutationOptions, Mutation } from '@nestjs/graphql'
import { PayloadMixin } from './payload.mixin'
import { AnyConstructor } from './types'

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
      const relayArgIndex = args.findIndex(arg => arg['clientMutationId'])
      const clientMutationId = args[relayArgIndex].clientMutationId

      const mappedArgs = args.map(arg => {
        const { clientMutationId, ...rest } = arg
        return rest
      })

      const methodResult = originalMethod.apply(this, mappedArgs)

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
