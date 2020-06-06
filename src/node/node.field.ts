import { Query, Args, Resolver } from '@nestjs/graphql'
import { returnsNode, Node } from './node.interface'
import { GlobalID } from '../id'

export type ResolveNodeReturns = Promise<Node> | Node | null | undefined

export interface NodeResolver {
  resolveNode(id: GlobalID): ResolveNodeReturns
}

@Resolver(Node)
export abstract class NodeField implements NodeResolver {
  resolveNode(id: GlobalID): ResolveNodeReturns {
    throw new Error('Method not implemented.')
  }

  @Query(returnsNode, {
    name: 'node',
    description: 'Fetches an object given its ID',
    nullable: true
  })
  node(
    @Args({
      name: 'id',
      nullable: false,
      description: 'The ID of an object'
    })
    id: GlobalID
  ) {
    return this.resolveNode(id)
  }
}
