import { NestFactory } from '@nestjs/core'
import {
  GraphQLSchemaBuilderModule,
  Resolver,
  ObjectType,
  Field,
  GraphQLSchemaFactory,
  Query
} from '@nestjs/graphql'
import { GraphQLSchema, isObjectType, GraphQLObjectType } from 'graphql'
import { RelayMutation } from './relay-mutation.decorator'
import { Node } from '../node'
import { GlobalIdScalar, ResolvedGlobalId } from '../global-id'

@ObjectType()
class Type {
  @Field()
  id!: ResolvedGlobalId

  @Field({ nullable: true })
  name?: string
}

@ObjectType()
class CreateTypeOutput {
  @Field({ nullable: true })
  type!: Type
}

@Resolver(Type)
export class TypeResolver {
  @RelayMutation(() => CreateTypeOutput)
  createType() {
    return null
  }

  @Query(() => Type)
  type() {
    return null
  }
}

describe('RelayMutation Decorator', () => {
  describe('schema', () => {
    let schema: GraphQLSchema

    beforeAll(async () => {
      const app = await NestFactory.create(GraphQLSchemaBuilderModule)
      await app.init()

      const gqlSchemaFactory = app.get(GraphQLSchemaFactory)

      schema = await gqlSchemaFactory.create([TypeResolver], [GlobalIdScalar])
    })

    it('should contain the `createType` field on the `Mutation` type', () => {
      const mutationType = schema.getMutationType()
      expect(mutationType).toBeDefined()

      const createTypeField = mutationType?.getFields()['createType']
      expect(createTypeField).toBeDefined()
    })

    it.skip('should contain the `CreateTypeInput` type', () => {
      const createTypeInputType = schema.getType('CreateTypeInput')
      expect(createTypeInputType).toBeDefined()
    })

    it('should contain the `CreateTypePayload` type', () => {
      const createTypePayloadType = schema.getType('CreateTypePayload')
      expect(createTypePayloadType).toBeDefined()
      expect(isObjectType(createTypePayloadType)).toBe(true)
    })

    describe('`CreateTypeInput` type', () => {
      it.skip('should contain the `clientMutationId` field', () => {
        const createTypeInputType = schema.getType('CreateTypeInput') as GraphQLObjectType
        expect(createTypeInputType).toBeDefined()
        expect(isObjectType(createTypeInputType)).toBe(true)

        const clientMutationIdField = createTypeInputType.getFields()['clientMutationId']
        expect(clientMutationIdField).toBeDefined()
      })
    })

    describe('`CreateTypePayload` type', () => {
      it('should contain the `clientMutationId` field', () => {
        const createTypePayloadType = schema.getType('CreateTypePayload') as GraphQLObjectType
        expect(createTypePayloadType).toBeDefined()
        expect(isObjectType(createTypePayloadType)).toBe(true)

        const clientMutationIdField = createTypePayloadType.getFields()['clientMutationId']
        expect(clientMutationIdField).toBeDefined()
      })
    })
  })
})
