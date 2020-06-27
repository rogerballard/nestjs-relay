import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { Ship } from './ship.type';

@ObjectType()
export class ShipEdge implements Relay.Edge<Ship> {
  @Field({ nullable: true })
  node!: Ship;

  @Field(() => String)
  cursor!: Relay.ConnectionCursor;
}
