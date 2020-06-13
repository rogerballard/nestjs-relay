import { GraphQLSchema, isObjectType, GraphQLObjectType } from 'graphql'
import { NestFactory } from '@nestjs/core'
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql'
import { GlobalIdScalar } from '../src/nestjs-relay-tools'
import { ShipResolver, NodeFieldsResolver, FactionResolver } from './starwars-app'

describe('Mutation', () => {
  let schema: GraphQLSchema

  beforeAll(async () => {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule)
    await app.init()

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
    schema = await gqlSchemaFactory.create(
      [FactionResolver, ShipResolver, NodeFieldsResolver],
      [GlobalIdScalar]
    )
  })

  describe('schema', () => {
    it('should contain the `introduceShip` field on the `Mutation` type', () => {
      const mutationType = schema.getMutationType()
      expect(mutationType).toBeDefined()

      const introduceShipField = mutationType?.getFields()['introduceShip']
      expect(introduceShipField).toBeDefined()
    })
    it.skip('should contain the `IntroduceShipInput` type', () => {
      const introduceShipInputType = schema.getType('IntroduceShipInput')
      expect(introduceShipInputType).toBeDefined()
    })
    it('should contain the `IntroduceShipPayload` type', () => {
      const introduceShipPayloadType = schema.getType('IntroduceShipPayload')
      expect(introduceShipPayloadType).toBeDefined()
      expect(isObjectType(introduceShipPayloadType)).toBe(true)
    })

    describe('`IntroduceShipInput` type', () => {
      it.skip('should contain the `clientMutationId` field', () => {
        const introduceShipInputType = schema.getType('IntroduceShipInput') as GraphQLObjectType
        expect(introduceShipInputType).toBeDefined()
        expect(isObjectType(introduceShipInputType)).toBe(true)

        const clientMutationIdField = introduceShipInputType.getFields()['clientMutationId']
        expect(clientMutationIdField).toBeDefined()
      })
    })

    describe('`IntroduceShipPayload` type', () => {
      it('should contain the `clientMutationId` field', () => {
        const introduceShipPayloadType = schema.getType('IntroduceShipPayload') as GraphQLObjectType
        expect(introduceShipPayloadType).toBeDefined()
        expect(isObjectType(introduceShipPayloadType)).toBe(true)

        const clientMutationIdField = introduceShipPayloadType.getFields()['clientMutationId']
        expect(clientMutationIdField).toBeDefined()
      })
    })
  })
})
