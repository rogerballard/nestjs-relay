import { Resolver, Query } from '@nestjs/graphql'
import { Faction } from './faction.type'
import { FactionService } from './faction.service'

@Resolver(Faction)
export class FactionResolver {
  constructor(private factionService: FactionService) {}

  @Query(() => Faction, { nullable: true })
  rebels() {
    return this.factionService.getRebels()
  }

  @Query(() => Faction, { nullable: true })
  empire() {
    return this.factionService.getEmpire()
  }
}
