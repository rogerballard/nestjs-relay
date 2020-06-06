import { Resolver } from '@nestjs/graphql'
import { NodeField, Node, GlobalID } from '../../src/nestjs-relay-tools'
import { FactionService } from './faction.service'
import { Faction } from './faction.type'

@Resolver(Node)
export class NodeFieldResolver extends NodeField {
  constructor(private factionService: FactionService) {
    super()
  }

  resolveNode(globalId: GlobalID) {
    switch (globalId.type) {
      case 'Faction':
        const faction = this.factionService.getFaction(globalId.id)
        return faction ? new Faction(faction) : null
      default:
        return null
    }
  }
}
