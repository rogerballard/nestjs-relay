import { ReturnTypeFunc, ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { PageInfo } from './page-info.type';
import { AnyConstructor } from '../common';

export interface CreateConnectionTypeArgs {
  nodeTypeFunc: ReturnTypeFunc;
  nodeTypeName: string;
}

export class ConnectionTypeFactory {
  private static connections = new Map();
  static create<T>(args: CreateConnectionTypeArgs): AnyConstructor<Relay.Connection<T>> {
    const nodeType = args.nodeTypeFunc() as AnyConstructor;
    if (this.connections.has(args.nodeTypeName)) {
      return this.connections.get(args.nodeTypeName);
    }

    @ObjectType(`${args.nodeTypeName}Edge`)
    class Edge implements Relay.Edge<T> {
      @Field(() => nodeType, {
        nullable: true,
      })
      node!: T;

      @Field(() => String)
      cursor!: Relay.ConnectionCursor;
    }

    @ObjectType(`${args.nodeTypeName}Connection`)
    class Connection implements Relay.Connection<T> {
      @Field(() => [Edge], {
        nullable: 'itemsAndList',
      })
      edges!: Edge[];

      @Field(() => PageInfo)
      pageInfo!: Relay.PageInfo;
    }

    this.connections.set(args.nodeTypeName, Connection);

    return Connection;
  }
}
