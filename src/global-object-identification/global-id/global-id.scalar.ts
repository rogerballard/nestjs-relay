import { Scalar, CustomScalar } from '@nestjs/graphql';
import { fromGlobalId, toGlobalId } from 'graphql-relay';
import { ValueNode, Kind, GraphQLError } from 'graphql';
import { typeResolvedGlobalId, ResolvedGlobalId } from './resolved-global-id.class';

@Scalar('ID', typeResolvedGlobalId)
export class GlobalIdScalar implements CustomScalar<string, ResolvedGlobalId> {
  parseValue(value: unknown): ResolvedGlobalId {
    const { id, type } = fromGlobalId(value as string);
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${value}`);
    }
    return new ResolvedGlobalId({ type, id });
  }

  serialize(value: unknown): string {
    if (typeof value !== 'object') {
      return value as string;
    }
    const { id, type } = value as ResolvedGlobalId;
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID value: ${value}`);
    }
    return toGlobalId(type, id);
  }

  parseLiteral(ast: ValueNode): ResolvedGlobalId {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Invalid ID type: ${ast.kind}`);
    }
    const { id, type } = fromGlobalId(ast.value);
    if (!id || !type) {
      throw new GraphQLError(`Invalid ID: ${ast.value}`);
    }
    return new ResolvedGlobalId({ type, id });
  }
}
