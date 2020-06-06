import { Args, Resolver, Query } from '@nestjs/graphql'
import { Faction } from './faction.type'

@Resolver(Faction)
export class FactionResolver {
  @Query(() => Faction)
  rebels() {
    return null
  }

  @Query(() => Faction)
  empire() {
    return null
  }
}
