import { Test } from '@nestjs/testing';
import { ObjectType, Field, Resolver } from '@nestjs/graphql';
import { Node } from '../node';
import { ResolvedGlobalId } from './resolved-global-id.class';
import { GlobalIdFieldResolver, ResolverParent, ResolverInfo } from './global-id-field.resolver';

@ObjectType({ implements: [Node] })
class Type implements Node {
  @Field()
  id!: ResolvedGlobalId;

  @Field({ nullable: true })
  name?: string;
}

@Resolver(Type)
export class TypeResolver extends GlobalIdFieldResolver() {}

describe('GlobalIdFieldResolver', () => {
  let resolver: TypeResolver;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TypeResolver],
    }).compile();

    resolver = module.get<TypeResolver>(TypeResolver);
  });

  describe('id resolver', () => {
    describe('when the `parent.id` is a ResolvedGlobalId', () => {
      it('should return the `parent.id` value', () => {
        const parent: ResolverParent = {
          id: new ResolvedGlobalId({ id: '1', type: 'Type' }),
        };
        const info: ResolverInfo = {
          parentType: { name: 'Type' },
        };

        const result = resolver.id(parent, info);

        expect(result).toEqual(new ResolvedGlobalId({ id: '1', type: 'Type' }));
      });
    });
    describe('when the `parent.id` is a string', () => {
      it('should construct a new ResolvedGlobalId', () => {
        const parent: ResolverParent = {
          id: '1',
        };
        const info: ResolverInfo = {
          parentType: { name: 'Type' },
        };

        const result = resolver.id(parent, info);

        expect(result).toEqual(new ResolvedGlobalId({ id: '1', type: 'Type' }));
      });
    });
    describe('when the `parent.id` is a number', () => {
      it('should construct a new ResolvedGlobalId', () => {
        const parent: ResolverParent = {
          id: 1,
        };
        const info: ResolverInfo = {
          parentType: { name: 'Type' },
        };

        const result = resolver.id(parent, info);

        expect(result).toEqual(new ResolvedGlobalId({ id: '1', type: 'Type' }));
      });
    });
    describe('when the `parent.id` is another type', () => {
      it('should throw an error', () => {
        const info: ResolverInfo = {
          parentType: { name: 'Type' },
        };

        let result;
        try {
          result = resolver.id(null, info);
        } catch (error) {
          expect(error).toEqual(
            new Error(`Cannot resolve id when 'parent' or 'parent.id' is null`),
          );
        }
      });
    });
  });
});
