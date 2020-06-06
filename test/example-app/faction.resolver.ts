import { Args, Resolver, Query } from '@nestjs/graphql'
import { Faction } from './faction.type'

@Resolver(Faction)
export class FactionResolver {
  @Query(() => Faction)
  faction(@Args('id') id: string) {
    return null
  }
}
