import { ObjectType, Field } from '@nestjs/graphql'
import { GlobalID, Node } from '../../src/nestjs-relay-tools'
import { Ship, returnsShips } from './ship.type'

@ObjectType({ implements: [Node] })
export class Faction implements Node {
  @Field()
  id!: GlobalID

  @Field({ nullable: true })
  name?: string
}
