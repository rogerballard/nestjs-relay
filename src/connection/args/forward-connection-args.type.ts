import { ArgsType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { returnsInt } from '../../common';

@ArgsType()
export class ForwardConnectionArgs {
  @Field(returnsInt)
  first!: number;

  @Field({ nullable: true })
  after?: Relay.ConnectionCursor;
}
