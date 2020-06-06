import { Resolver } from '@nestjs/graphql'
import { NodeField, Node } from '../../src/nestjs-relay-tools'

@Resolver(Node)
export class NodeFieldResolver extends NodeField(() => ({})) {}
