import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import {
  GlobalIdFieldResolver,
  ConnectionArgs,
  ResolveConnectionField,
} from '../../src/nestjs-relay';
import { Faction } from './faction.type';
import { FactionService } from './faction.service';
import { ShipConnection } from './ship.connection';
import { connectionFromArray } from 'graphql-relay';
import { Ship } from './ship.type';

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

  @ResolveConnectionField('Ship', () => Ship)
  ships(@Args() args: ConnectionArgs, @Parent() parent: Faction) {
    return connectionFromArray(this.factionService.getShips(parent.id.toString()), args);
  }
}
