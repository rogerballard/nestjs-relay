import { ObjectType, Field, ReturnTypeFunc, ReturnTypeFuncValue } from '@nestjs/graphql'
import { Type } from '@nestjs/common'
import { applyMixins, Mixin } from '../utils/apply-mixins'

export interface Payload {
  clientMutationId?: string
}

export type PayloadType<T> = Type<Payload & T>

@ObjectType({ isAbstract: true })
export abstract class Payload {
  @Field({
    name: 'clientMutationId',
    nullable: true
  })
  clientMutationId?: string
}

export function constructPayload<T>(typeFunc: ReturnTypeFunc): Mixin<ReturnTypeFunc> {
  const typeFuncValue: ReturnTypeFuncValue = typeFunc()
  applyMixins(typeFuncValue, [Payload])
  return typeFuncValue
}
