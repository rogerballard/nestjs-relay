import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { PageInfo } from './page-info.type';
import { AnyConstructor } from '../common';

export function Connection<T = any>(node: T, name: string): AnyConstructor<Relay.Connection<T>> {
  @ObjectType(`${name}Edge`)
  class Edge implements Relay.Edge<T> {
    @Field(node)
    node!: T;

    @Field(() => String)
    cursor!: Relay.ConnectionCursor;
  }

  @ObjectType(`${name}Connection`)
  class Connection implements Relay.Connection<T> {
    @Field(() => [Edge])
    edges!: Edge[];

    @Field(() => PageInfo)
    pageInfo!: Relay.PageInfo;
  }

  return Connection;
}
