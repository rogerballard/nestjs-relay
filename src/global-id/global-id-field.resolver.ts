import { Type } from '@nestjs/common';
import { Resolver, ResolveField, Parent, Info } from '@nestjs/graphql';
import { GraphQLObjectType } from 'graphql';
import { GlobalId } from './global-id.type';
import { ResolvedGlobalId, typeResolvedGlobalId } from './resolved-global-id.class';

export interface ResolverParent {
  id: GlobalId;
}

export interface ResolverInfo {
  parentType: Pick<GraphQLObjectType, 'name'>;
}

export interface GlobalIdFieldResolver {
  id(parent: ResolverParent | null, info: ResolverInfo): ResolvedGlobalId;
}

export function GlobalIdFieldResolver<T>(classRef: Type<T>): Type<GlobalIdFieldResolver> {
  @Resolver(classRef, { isAbstract: true })
  abstract class GlobalIdFieldResolverHost {
    @ResolveField(typeResolvedGlobalId, {
      name: 'id',
      nullable: false,
    })
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
