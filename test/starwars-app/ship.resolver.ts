import { Resolver, Mutation } from '@nestjs/graphql'
import { GlobalIdFieldResolver } from '../../src/nestjs-relay-tools'
import { Ship } from './ship.type'

@Resolver(Ship)
export class ShipResolver extends GlobalIdFieldResolver(Ship) {
  @Mutation(() => Ship, {
    name: 'introduceShip',
    nullable: true
  })
  introduceShip() {
    return null
  }
}
