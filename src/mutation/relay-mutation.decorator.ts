import { ReturnTypeFunc, MutationOptions, Mutation } from '@nestjs/graphql'
import { PayloadMixin } from './payload.mixin'
import { AnyConstructor } from './types'

export type RelayMutationOptions = MutationOptions

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayMutationOptions
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: any) => {
    const outputType = typeFunc() as AnyConstructor
    const mutationName = options?.name ? options.name : String(key)

    const payload = PayloadMixin(outputType, { mutationName })

    Mutation(() => payload, options)(target, key, descriptor)
  }
}
