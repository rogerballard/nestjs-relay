import { InputType, Field } from '@nestjs/graphql'
import { GlobalId, ResolvedGlobalId } from '../../src/global-id'

@InputType()
export class IntroduceShipInput {
  @Field()
  shipName!: string

  @Field()
  factionId!: ResolvedGlobalId

  @Field({ nullable: true })
  clientMutationId!: string
}
