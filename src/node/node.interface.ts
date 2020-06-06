import { Field, ID, InterfaceType } from '@nestjs/graphql'
import { GlobalID } from '../id'

@InterfaceType({
  description: 'An object with an ID'
})
export class Node {
  @Field({
    nullable: false,
    description: 'The ID of the object'
  })
  id!: GlobalID
}

export const typeNode = () => Node

export const returnsNode = () => Node
