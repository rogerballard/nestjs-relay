import { ArgsType, Field, Int } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ArgsType()
export class BackwardConnectionArgs {
  @Field(() => Int)
  last!: number;

  @Field({ nullable: true })
  before?: Relay.ConnectionCursor;
}
