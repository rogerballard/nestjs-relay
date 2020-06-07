import { Resolver, ResolveField, Query, Info, Parent } from '@nestjs/graphql'
import { Faction } from './faction.type'
import { FactionService } from './faction.service'
import { GlobalIdFieldResolver } from '../../src/nestjs-relay-tools'

@Resolver(Faction)
export class FactionResolver extends GlobalIdFieldResolver(Faction) {
  constructor(private factionService: FactionService) {
    super()
  }

  @Query(() => Faction, { nullable: true })
  rebels() {
    return this.factionService.getRebels()
  }

  @Query(() => Faction, { nullable: true })
  empire() {
    return this.factionService.getEmpire()
  }
}
