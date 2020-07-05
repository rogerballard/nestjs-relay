import { Field, ArgsType, Int } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { returnsInt } from '../../common';

@ArgsType()
export class ConnectionArgs implements Relay.ConnectionArguments {
  @Field({
    nullable: true,
    description: 'Paginate before opaque cursor',
  })
  before?: Relay.ConnectionCursor;

  @Field({
    nullable: true,
    description: 'Paginate after opaque cursor',
  })
  after?: Relay.ConnectionCursor;

  @Field(returnsInt, { nullable: true, description: 'Paginate first' })
  first?: number;

  @Field(returnsInt, { nullable: true, description: 'Paginate last' })
  last?: number;
}
