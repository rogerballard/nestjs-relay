import { ObjectType, Field } from '@nestjs/graphql'
import { GlobalID, Node } from '../../src/nestjs-relay-tools'
import { ShipDTO } from './ship.service'

@ObjectType({ implements: [Node] })
export class Ship implements Node {
  constructor(props: ShipDTO) {
    Object.assign(this, props)
  }

  @Field()
  id!: GlobalID

  @Field({ nullable: true })
  name?: string
}
