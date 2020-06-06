import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ShipService } from './ship.service'
import { FactionService } from './faction.service'
import { NodeFieldResolver } from './node.resolver'
import { FactionResolver } from './faction.resolver'
import { IDScalar } from '../../src/nestjs-relay-tools'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './test/starwars-app/schema.gql'
    })
  ],
  providers: [FactionResolver, FactionService, NodeFieldResolver, ShipService, IDScalar]
})
export class StarWarsModule {}
