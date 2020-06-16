import { Field, InterfaceType } from '@nestjs/graphql';
import { ResolvedGlobalId } from '../global-id';

@InterfaceType({
  description: 'An object with an ID',
})
class Node {
  @Field({
    nullable: false,
    description: 'The ID of the object',
  })
  id!: ResolvedGlobalId;
}

export const NodeInterface = Node;

export const typeNodeInterface = () => NodeInterface;

export const typeNodeInterfaces = () => [NodeInterface];

export const returnsNodeInterface = () => NodeInterface;

export const returnsNodeInterfaces = () => [NodeInterface];
