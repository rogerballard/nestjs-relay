import { ArgsType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { returnsInt } from '../../common';

@ArgsType()
export class BackwardConnectionArgs {
  @Field(returnsInt)
  last!: number;

  @Field({ nullable: true })
  before?: Relay.ConnectionCursor;
}
