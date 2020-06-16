import { Query, Args, Resolver } from '@nestjs/graphql';
import { returnsNodeInterface, returnsNodeInterfaces, NodeInterface } from './node.interface';
import { ResolvedGlobalId, typeResolvedGlobalId, typeResolvedGlobalIds } from '../global-id';

export type ResolvedNode =
  | Promise<NodeInterface>
  | NodeInterface
  | Promise<null>
  | null
  | Promise<undefined>
  | undefined;

export interface NodeResolver {
  resolveNode(id: ResolvedGlobalId): ResolvedNode;
}

@Resolver(NodeInterface)
export class NodeFieldResolver implements NodeResolver {
  resolveNode(id: ResolvedGlobalId): ResolvedNode {
    throw new Error('Method not implemented.');
  }

  @Query(returnsNodeInterface, {
    name: 'node',
    description: 'Fetches an object given its ID',
    nullable: true,
  })
  node(
    @Args({
      name: 'id',
      nullable: false,
      description: 'The ID of an object',
      type: typeResolvedGlobalId,
    })
    id: ResolvedGlobalId,
  ): ResolvedNode {
    return this.resolveNode(id);
  }

  @Query(returnsNodeInterfaces, {
    name: 'nodes',
    description: 'Fetches objects given their IDs',
    nullable: 'items',
  })
  nodes(
    @Args({
      name: 'ids',
      nullable: false,
      description: 'The IDs of objects',
      type: typeResolvedGlobalIds,
    })
    ids: ResolvedGlobalId[],
  ): Promise<ResolvedNode[]> {
    return Promise.all(ids.map(id => Promise.resolve(this.resolveNode(id))));
  }
}
