import { NestFactory } from '@nestjs/core'
import {
  GraphQLSchemaBuilderModule,
  Resolver,
  ObjectType,
  Field,
  GraphQLSchemaFactory,
  Query,
  Args
} from '@nestjs/graphql'
import { GraphQLSchema, isObjectType, GraphQLObjectType } from 'graphql'
import { RelayMutation } from './relay-mutation.decorator'
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

describe('RelayArgs Decorator', () => {
  describe('schema', () => {
    let schema: GraphQLSchema

    beforeAll(async () => {
      const app = await NestFactory.create(GraphQLSchemaBuilderModule)
      await app.init()

      const gqlSchemaFactory = app.get(GraphQLSchemaFactory)

      schema = await gqlSchemaFactory.create([TypeResolver], [GlobalIdScalar])
    })
  })

  it('should do', () => {})
})
