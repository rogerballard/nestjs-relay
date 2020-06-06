import { ObjectType, Field } from '@nestjs/graphql'
import { GlobalID, Node } from '../../src/nestjs-relay-tools'
import { FactionDTO } from './faction.service'

@ObjectType({ implements: [Node] })
export class Faction implements Node {
  constructor(props: FactionDTO) {
    Object.assign(this, props)
  }

  @Field()
  id!: GlobalID

  @Field({ nullable: true })
  name?: string
}
