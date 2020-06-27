import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { AnyConstructor } from '../common';

export function Edge<T>(nodeType: AnyConstructor<T>): AnyConstructor<Relay.Edge<T>> {
  @ObjectType({ isAbstract: true })
  class Edge implements Relay.Edge<T> {
    @Field(() => nodeType)
    node!: T;

    @Field(() => String)
    cursor!: Relay.ConnectionCursor;
  }

  return Edge;
}
