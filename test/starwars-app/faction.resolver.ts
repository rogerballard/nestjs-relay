import { Resolver, Query } from '@nestjs/graphql';
import { GlobalIdFieldResolver } from '../../src/nestjs-relay';
import { Faction } from './faction.type';
import { FactionService } from './faction.service';

@Resolver(Faction)
export class FactionResolver extends GlobalIdFieldResolver(Faction) {
  constructor(private factionService: FactionService) {
    super();
  }

  @Query(() => Faction, { nullable: true })
  rebels() {
    return this.factionService.getRebels();
  }

  @Query(() => Faction, { nullable: true })
  empire() {
    return this.factionService.getEmpire();
  }
}
