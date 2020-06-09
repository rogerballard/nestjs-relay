import { Test } from '@nestjs/testing'
import { ObjectType, Field, Resolver, Query } from '@nestjs/graphql'
import { Node } from '../node'
import { ResolvedGlobalId } from './resolved-global-id.type'
import { GlobalIdFieldResolver, ResolverParent, ResolverInfo } from './global-id-field.resolver'

@ObjectType({ implements: [Node] })
export class Faction implements Node {
  @Field()
  id!: ResolvedGlobalId

  @Field({ nullable: true })
  name?: string
}

@Resolver(Faction)
export class FactionResolver extends GlobalIdFieldResolver(Faction) {}

describe('GlobalIdFieldResolver', () => {
  let resolver: FactionResolver

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FactionResolver]
    }).compile()

    resolver = module.get<FactionResolver>(FactionResolver)
  })

  describe('id resolver', () => {
    describe('when the `parent.id` is a ResolvedGlobalId', () => {
      it('should return the `parent.id` value', () => {
        const parent: ResolverParent = {
          id: { id: '1', type: 'Faction' }
        }
        const info: ResolverInfo = {
          parentType: { name: 'Faction' }
        }

        const result = resolver.id(parent, info)

        expect(result).toEqual({ id: '1', type: 'Faction' })
      })
    })
    describe('when the `parent.id` is a string', () => {
      it('should construct a new ResolvedGlobalId', () => {
        const parent: ResolverParent = {
          id: '1'
        }
        const info: ResolverInfo = {
          parentType: { name: 'Faction' }
        }

        const result = resolver.id(parent, info)

        expect(result).toEqual({ id: '1', type: 'Faction' })
      })
    })
    describe('when the `parent.id` is a number', () => {
      it('should construct a new ResolvedGlobalId', () => {
        const parent: ResolverParent = {
          id: 1
        }
        const info: ResolverInfo = {
          parentType: { name: 'Faction' }
        }

        const result = resolver.id(parent, info)

        expect(result).toEqual({ id: '1', type: 'Faction' })
      })
    })
    describe('when the `parent.id` is another type', () => {
      it('should throw an error', () => {
        const info: ResolverInfo = {
          parentType: { name: 'Faction' }
        }

        let result
        try {
          result = resolver.id(null, info)
        } catch (error) {
          expect(error).toEqual(new Error(`Cannot resolve id when 'parent' or 'parent.id' is null`))
        }
      })
    })
  })
})
