import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
import {
  GlobalIdFieldResolver,
  ConnectionArgs,
  ResolveConnectionField,
  Connection,
} from '../../src/nestjs-relay';
import { Faction } from './faction.type';
import { FactionService } from './faction.service';
import { connectionFromArray } from 'graphql-relay';
import { Ship } from './ship.type';
import { ShipDTO } from './ship.service';

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

  @ResolveConnectionField(() => Ship)
  ships(@Args() args: ConnectionArgs, @Parent() parent: Faction): Connection<ShipDTO | undefined> {
    return connectionFromArray(this.factionService.getShips(parent.id.toString()), args);
  }
}
