import { Field, InterfaceType } from '@nestjs/graphql';
import { ResolvedGlobalId } from '../global-id';

@InterfaceType({
  description: 'An object with an ID',
})
export class Node {
  @Field({
    nullable: false,
    description: 'The ID of the object',
  })
  id!: ResolvedGlobalId;
}

export const typeNode = () => Node;

export const typeNodes = () => [Node];

export const returnsNode = () => Node;

export const returnsNodes = () => [Node];
