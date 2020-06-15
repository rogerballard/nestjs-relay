import { Resolver } from '@nestjs/graphql';
import { NodeFieldsDefinition, Node, ResolvedGlobalId } from '../../src/nestjs-relay';
import { FactionService } from './faction.service';
import { Faction } from './faction.type';
import { ShipService } from './ship.service';
import { Ship } from './ship.type';

@Resolver(Node)
export class NodeFieldsResolver extends NodeFieldsDefinition {
  constructor(private factionService: FactionService, private shipService: ShipService) {
    super();
  }

  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'Faction':
        const faction = this.factionService.getFaction(resolvedGlobalId.toString());
        return faction ? new Faction(faction) : null;
      case 'Ship':
        const ship = this.shipService.getShip(resolvedGlobalId.toNumber());
        return ship ? new Ship(ship) : null;
      default:
        return null;
    }
  }
}
