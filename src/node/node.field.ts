import { Resolver, Query, Args } from '@nestjs/graphql'
import { typeNode, returnsNode } from './node.interface'
import { GlobalID } from '../id'

export function NodeField<T = any>(resolveFunc: Function): any {
  @Resolver(typeNode)
  class NodeFieldResolver {
    @Query(returnsNode, {
      name: 'node',
      description: 'Fetches an object given its ID',
      nullable: true
    })
    async node(
      @Args({
        name: 'id',
        nullable: false,
        description: 'The ID of an object'
      })
      id: GlobalID
    ): Promise<T> {
      return resolveFunc(id)
    }
  }

  return NodeFieldResolver
}
