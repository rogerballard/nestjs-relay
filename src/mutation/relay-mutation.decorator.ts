import {
  ReturnTypeFunc,
  MutationOptions,
  Mutation,
  ObjectType,
  Field,
  ObjectTypeOptions
} from '@nestjs/graphql'
import { PayloadMixin, PayloadMixinOptions } from './payload.mixin'
import { AnyConstructor } from './types'

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: MutationOptions
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: any) => {
    const mutationName = options?.name ? options.name : 'DefaultMutationPayload'

    const payloadMixinOptions: PayloadMixinOptions = {
      mutationName
    }

    const type = typeFunc() as AnyConstructor
    const payload = PayloadMixin(type, payloadMixinOptions)

    Mutation(() => payload, options)(target, key, descriptor)
  }
}
