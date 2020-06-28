import { Test } from '@nestjs/testing';
import { ObjectType, Field, Resolver } from '@nestjs/graphql';
import { ResolvedGlobalId } from './resolved-global-id.class';
import { GlobalIdFieldResolver, ResolverParent, ResolverInfo } from './global-id-field.resolver';
import { NodeInterface } from '../node';
import * as GlobalIdFieldModule from './global-id-field.decorator';

@ObjectType({ implements: [NodeInterface] })
class Type implements NodeInterface {
  @Field()
  id!: ResolvedGlobalId;

  @Field({ nullable: true })
  name?: string;
}

@Resolver(Type)
export class TypeResolver extends GlobalIdFieldResolver(Type) {}

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

        try {
          resolver.id(null, info);
        } catch (error) {
          expect(error).toEqual(
            new Error(`Cannot resolve id when 'parent' or 'parent.id' is null`),
          );
        }
      });
    });
  });

  describe('id field options', () => {
    const spy = jest.spyOn(GlobalIdFieldModule, 'GlobalIdField');

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe('when the id field options are provided', () => {
      it('should be passed to the GlobalIdField options', () => {
        GlobalIdFieldResolver(Type, { complexity: 1 });

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith({ complexity: 1 });
      });
    });
    describe('when the id field options are not provided', () => {
      it('should not be passed to the GlobalIdField options', () => {
        GlobalIdFieldResolver(Type);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith({});
      });
    });
  });
});
