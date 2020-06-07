import { Query, Args, Resolver } from '@nestjs/graphql'
import { returnsNode, Node, returnsNodes, typeNodes } from './node.interface'
import { ResolvedGlobalId, typeResolvedGlobalId, typeResolvedGlobalIds } from '../global-id'

export type ResolveNodeReturns =
  | Promise<Node>
  | Node
  | Promise<null>
  | null
  | Promise<undefined>
  | undefined

export interface NodeResolver {
  resolveNode(id: ResolvedGlobalId): ResolveNodeReturns
}

@Resolver(Node)
export abstract class NodeFieldsDefinition implements NodeResolver {
  resolveNode(id: ResolvedGlobalId): ResolveNodeReturns {
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
      type: typeResolvedGlobalId
    })
    id: ResolvedGlobalId
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
      type: typeResolvedGlobalIds
    })
    ids: ResolvedGlobalId[]
  ) {
    return Promise.all(ids.map(id => Promise.resolve(this.resolveNode(id))))
  }
}
