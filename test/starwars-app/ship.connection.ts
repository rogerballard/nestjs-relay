import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { Ship } from './ship.type';
import { ShipEdge } from './ship.edge';
import { PageInfo } from '../../src/nestjs-relay';

@ObjectType()
export class ShipConnection implements Relay.Connection<Ship> {
  @Field(() => [ShipEdge])
  edges!: ShipEdge[];

  @Field(() => PageInfo)
  pageInfo!: Relay.PageInfo;
}
