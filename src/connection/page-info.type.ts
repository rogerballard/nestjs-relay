import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ObjectType()
export class PageInfo implements Relay.PageInfo {
  @Field(() => Boolean)
  hasNextPage!: boolean;

  @Field(() => Boolean)
  hasPreviousPage!: boolean;

  @Field(() => String)
  startCursor!: Relay.ConnectionCursor;

  @Field(() => String)
  endCursor!: Relay.ConnectionCursor;
}
