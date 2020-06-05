import { Field, ID, InterfaceType } from '@nestjs/graphql'
import { GlobalID } from '../id'

@InterfaceType({ isAbstract: true })
export abstract class Node {
  @Field(type => ID)
  id!: GlobalID
}
