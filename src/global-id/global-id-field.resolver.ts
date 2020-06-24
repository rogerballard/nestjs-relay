import { Type } from '@nestjs/common';
import { Resolver, Parent, Info } from '@nestjs/graphql';
import { GraphQLObjectType } from 'graphql';
import { GlobalId } from './global-id.type';
import { ResolvedGlobalId } from './resolved-global-id.class';
import { GlobalIdField, GlobalIdFieldOptions } from './global-id.field';

export interface ResolverParent {
  id: GlobalId;
}

export interface ResolverInfo {
  parentType: Pick<GraphQLObjectType, 'name'>;
}

export interface GlobalIdFieldResolver {
  id(parent: ResolverParent | null, info: ResolverInfo): ResolvedGlobalId;
}

export function GlobalIdFieldResolver<T>(
  classRef: Type<T>,
  idFieldOptions?: GlobalIdFieldOptions,
): Type<GlobalIdFieldResolver> {
  const globalIdFieldOptions = idFieldOptions || {};

  @Resolver(classRef, { isAbstract: true })
  abstract class GlobalIdFieldResolverHost {
    @GlobalIdField(globalIdFieldOptions)
    id(@Parent() parent: ResolverParent, @Info() info: ResolverInfo): ResolvedGlobalId {
      if (!parent || !parent.id) {
        throw new Error(`Cannot resolve id when 'parent' or 'parent.id' is null`);
      }
      switch (typeof parent.id) {
        case 'object':
          return parent.id;
        case 'string':
          return new ResolvedGlobalId({
            type: info.parentType.name,
            id: parent.id,
          });
        case 'number':
          return new ResolvedGlobalId({
            type: info.parentType.name,
            id: parent.id.toString(),
          });
      }
    }
  }
  return GlobalIdFieldResolverHost as Type<GlobalIdFieldResolver>;
}
