import { InputType, Field } from '@nestjs/graphql'
import { constructPayload, PayloadType } from './payload.type'
import { ResolvedGlobalId } from '../global-id'

@InputType()
export class IntroduceShipInput {
  @Field()
  shipName!: string

  @Field()
  factionId!: ResolvedGlobalId
}

describe('constructPayload', () => {
  it('should return a mixin of Payload and the provided input typeFunc', () => {
    const returnType: PayloadType<IntroduceShipInput> = constructPayload(() => IntroduceShipInput)

    const instance = new returnType()
    instance.clientMutationId = 'abc'
    instance.shipName = 'Ship'
    instance.factionId = { type: 'Faction', id: '1' }

    expect(instance.clientMutationId).toBe('abc')
    expect(instance.shipName).toBe('Ship')
    expect(instance.factionId).toEqual({ type: 'Faction', id: '1' })
  })
})
