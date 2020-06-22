import { Resolver } from '@nestjs/graphql';
import { NodeFieldResolver, NodeInterface, ResolvedGlobalId } from '../../src/nestjs-relay';
import { FactionService } from './faction.service';
import { Faction } from './faction.type';
import { ShipService } from './ship.service';
import { Ship } from './ship.type';

@Resolver(NodeInterface)
export class NodeResolver extends NodeFieldResolver {
  constructor(private factionService: FactionService, private shipService: ShipService) {
    super();
  }

  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'Faction': {
        const faction = this.factionService.getFaction(resolvedGlobalId.toString());
        return faction ? new Faction(faction) : null;
      }
      case 'Ship': {
        const ship = this.shipService.getShip(resolvedGlobalId.toNumber());
        return ship ? new Ship(ship) : null;
      }
      default:
        return null;
    }
  }
}
