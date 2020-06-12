import { ObjectType, Field, ReturnTypeFunc, ReturnTypeFuncValue } from '@nestjs/graphql'
import { Type } from '@nestjs/common'

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
