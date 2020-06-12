import { ObjectType, Field } from '@nestjs/graphql'
import { Ship } from './ship.type'
import { Faction } from './faction.type'

@ObjectType()
export class IntroduceShipOutput {
  @Field({ nullable: true })
  ship?: Ship

  @Field({ nullable: true })
  faction?: Faction
}
