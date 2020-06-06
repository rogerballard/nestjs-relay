import { ObjectType, Field } from '@nestjs/graphql'
import { GlobalID, Node } from '../../src/nestjs-relay-tools'

@ObjectType({ implements: [Node] })
export class Ship implements Node {
  @Field()
  id!: GlobalID

  @Field()
  name!: string
}
