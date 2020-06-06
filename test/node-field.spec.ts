import {
  ObjectType,
  Field,
  Resolver,
  Query,
  Args,
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory
} from '@nestjs/graphql'
import { NestFactory } from '@nestjs/core'
import { printSchema, GraphQLSchema } from 'graphql'
import { Node, GlobalID, IDScalar, NodeField } from '../src/nestjs-relay-tools'

@ObjectType({ implements: [Node] })
class Faction implements Node {
  @Field()
  id!: GlobalID

  @Field()
  name!: string
}

@Resolver(Faction)
class FactionResolver {
  @Query(() => Faction)
  faction(@Args('id') id: string) {
    return { name: 'Rebels' }
  }
}

@Resolver(Node)
class NodeFieldResolver extends NodeField(() => {
  name: 'Test'
}) {}

describe('NodeField', () => {
  let schema: GraphQLSchema
  let schemaString: string

  beforeEach(async () => {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule)
    await app.init()

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
    schema = await gqlSchemaFactory.create([FactionResolver, NodeFieldResolver], [IDScalar])
    schemaString = printSchema(schema)
  })

  describe('schema', () => {
    it('should include the Node interface', () => {
      const nodeType = schema.getType('Node')
      expect(nodeType).toBeDefined()
    })
    it('should include the `node` field on the Query type', () => {
      const queryType = schema.getQueryType()
      expect(queryType).toBeDefined()

      const nodeField = queryType?.getFields()['node']
      expect(nodeField).toBeDefined()
    })
  })
})
