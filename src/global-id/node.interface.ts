import { Field, InterfaceType } from '@nestjs/graphql';
import { ResolvedGlobalId } from './resolved-global-id.class';

@InterfaceType('Node', {
  description: 'An object with an ID',
})
export class NodeInterface {
  @Field({
    nullable: false,
    description: 'The ID of the object',
  })
  id!: ResolvedGlobalId;
}

export const typeNodeInterface = () => NodeInterface;

export const typeNodeInterfaces = () => [NodeInterface];

export const returnsNodeInterface = () => NodeInterface;

export const returnsNodeInterfaces = () => [NodeInterface];
