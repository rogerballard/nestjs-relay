import { ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ObjectType('PageInfo')
export class PageInfo implements Relay.PageInfo {
  @Field(() => Boolean, { nullable: true })
  hasNextPage?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasPreviousPage?: boolean;

  @Field(() => String, { nullable: true })
  startCursor?: Relay.ConnectionCursor;

  @Field(() => String, { nullable: true })
  endCursor?: Relay.ConnectionCursor;
}
