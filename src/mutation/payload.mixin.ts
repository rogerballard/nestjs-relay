import { ObjectType, Field } from '@nestjs/graphql'
import { getPayloadName } from './helpers'
import { Mixin, AnyConstructor } from './types'

export interface PayloadMixinOptions {
  mutationName: string
}

export function PayloadMixin<TBase extends AnyConstructor>(
  base: TBase,
  options: PayloadMixinOptions
) {
  const name = getPayloadName(options.mutationName)

  @ObjectType(name)
  class Payload extends base {
    @Field({
      name: 'clientMutationId',
      nullable: true
    })
    clientMutationId?: string
  }

  return Payload
}

export type PayloadMixin = Mixin<typeof PayloadMixin>
