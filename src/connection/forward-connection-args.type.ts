import { ArgsType, Field, Int } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ArgsType()
export class ForwardConnectionArgs {
  @Field(() => Int)
  first!: number;

  @Field({ nullable: true })
  after?: Relay.ConnectionCursor;
}
