import { Field, ID, InterfaceType } from '@nestjs/graphql'
import { GlobalID } from '../id'

@InterfaceType({
  isAbstract: true,
  description: 'An object with an ID'
})
export abstract class Node {
  @Field({
    nullable: false,
    description: 'The ID of the object'
  })
  id!: GlobalID
}
