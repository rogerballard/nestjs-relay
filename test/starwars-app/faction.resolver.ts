import { Args, Resolver, Query } from '@nestjs/graphql'
import { Faction } from './faction.type'

@Resolver(Faction)
export class FactionResolver {
  @Query(() => Faction, { nullable: true })
  rebels() {
    return null
  }

  @Query(() => Faction, { nullable: true })
  empire() {
    return null
  }
}
