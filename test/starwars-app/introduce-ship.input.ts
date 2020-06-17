import { InputType, Field } from '@nestjs/graphql';
import { ResolvedGlobalId } from '../../src/nestjs-relay';

@InputType()
export class IntroduceShipInput {
  @Field()
  shipName!: string;

  @Field()
  factionId!: ResolvedGlobalId;
}
