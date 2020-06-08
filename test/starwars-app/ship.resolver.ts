import { Resolver } from '@nestjs/graphql'
import { GlobalIdFieldResolver } from '../../src/nestjs-relay-tools'
import { Ship } from './ship.type'

@Resolver(Ship)
export class ShipResolver extends GlobalIdFieldResolver(Ship) {}
