import { Query, Args, Resolver } from '@nestjs/graphql'
import { returnsNode, Node, returnsNodes, typeNodes } from './node.interface'
import { GlobalID } from '../id'
import { typeGlobalIDs, typeGlobalID } from '../id/global-id.type'

export type ResolveNodeReturns =
  | Promise<Node>
  | Node
  | Promise<null>
  | null
  | Promise<undefined>
  | undefined

export interface NodeResolver {
  resolveNode(id: GlobalID): ResolveNodeReturns
}

@Resolver(Node)
export abstract class NodeFields implements NodeResolver {
  resolveNode(id: GlobalID): ResolveNodeReturns {
    throw new Error('Method not implemented.')
  }

  @Query(returnsNode, {
    name: 'node',
    description: 'Fetches an object given its ID',
    nullable: true
  })
  async node(
    @Args({
      name: 'id',
      nullable: false,
      description: 'The ID of an object',
      type: typeGlobalID
    })
    id: GlobalID
  ) {
    return this.resolveNode(id)
  }

  @Query(returnsNodes, {
    name: 'nodes',
    description: 'Fetches objects given their IDs',
    nullable: 'items'
  })
  async nodes(
    @Args({
      name: 'ids',
      nullable: false,
      description: 'The IDs of objects',
      type: typeGlobalIDs
    })
    ids: GlobalID[]
  ) {
    return Promise.all(ids.map(id => Promise.resolve(this.resolveNode(id))))
  }
}
