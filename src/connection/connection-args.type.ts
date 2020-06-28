import { Field, ArgsType, Int } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ArgsType()
export class ConnectionArgs implements Relay.ConnectionArguments {
  @Field(() => String, {
    nullable: true,
    description: 'Paginate before opaque cursor',
  })
  before?: Relay.ConnectionCursor;

  @Field(() => String, {
    nullable: true,
    description: 'Paginate after opaque cursor',
  })
  after?: Relay.ConnectionCursor;

  @Field(() => Int, { nullable: true, description: 'Paginate first' })
  first?: number;

  @Field(() => Int, { nullable: true, description: 'Paginate last' })
  last?: number;
}
