import { ObjectType, Field } from '@nestjs/graphql'
import { Node, ResolvedGlobalId } from '../../src/nestjs-relay'
import { ShipDTO } from './ship.service'

@ObjectType({ implements: [Node] })
export class Ship implements Node {
  constructor(props: ShipDTO) {
    Object.assign(this, props)
  }

  @Field()
  id!: ResolvedGlobalId

  @Field({ nullable: true })
  name?: string
}
