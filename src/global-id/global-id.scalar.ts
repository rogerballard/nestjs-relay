import { Scalar, CustomScalar } from '@nestjs/graphql';
import { fromGlobalId, toGlobalId } from 'graphql-relay';
import { ValueNode, Kind, GraphQLError } from 'graphql';
import { typeResolvedGlobalId, ResolvedGlobalId } from './resolved-global-id.type';

@Scalar('ID', typeResolvedGlobalId)
export class GlobalIdScalar implements CustomScalar<string, ResolvedGlobalId> {
  parseValue(value: string): ResolvedGlobalId {
    const { id, type } = fromGlobalId(value);
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${value}`);
    }
    return { type, id };
  }

  serialize(value: ResolvedGlobalId): string {
    return toGlobalId(value.type, value.id);
  }

  parseLiteral(ast: ValueNode): ResolvedGlobalId {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Invalid ID type: ${ast.kind}`);
    }
    const { id, type } = fromGlobalId(ast.value);
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${ast.value}`);
    }
    return { type, id };
  }
}
