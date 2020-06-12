import { Resolver, Mutation } from '@nestjs/graphql'
import { GlobalIdFieldResolver, RelayMutation } from '../../src/nestjs-relay-tools'
import { Ship } from './ship.type'
import { IntroduceShipOutput } from './introduce-ship.output'

@Resolver(Ship)
export class ShipResolver extends GlobalIdFieldResolver(Ship) {
  @RelayMutation(() => IntroduceShipOutput, {
    name: 'introduceShip',
    nullable: true
  })
  introduceShip() {
    return null
  }
}
