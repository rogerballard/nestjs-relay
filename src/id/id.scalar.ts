import { Scalar, CustomScalar } from '@nestjs/graphql'
import { fromGlobalId, toGlobalId } from 'graphql-relay'
import { ValueNode, Kind, GraphQLError } from 'graphql'
import { typeGlobalID, GlobalID } from './global-id.type'

@Scalar('ID', typeGlobalID)
export class IDScalar implements CustomScalar<string, GlobalID> {
  parseValue(value: string): GlobalID {
    const { id, type } = fromGlobalId(value)
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${value}`)
    }
    return new GlobalID(type, parseInt(id, 10))
  }

  serialize(value: GlobalID): string {
    return toGlobalId(value.type, value.id.toString())
  }

  parseLiteral(ast: ValueNode): GlobalID {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Invalid ID type: ${ast.kind}`)
    }
    const { id, type } = fromGlobalId(ast.value)
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${ast.value}`)
    }
    return new GlobalID(type, parseInt(id, 10))
  }
}
