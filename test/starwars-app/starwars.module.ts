import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ShipService } from './ship.service'
import { FactionService } from './faction.service'
import { NodeFieldsResolver } from './node.resolver'
import { FactionResolver } from './faction.resolver'
import { GlobalIDScalar } from '../../src/nestjs-relay-tools'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './test/starwars-app/schema.gql'
    })
  ],
  providers: [FactionResolver, FactionService, NodeFieldsResolver, ShipService, GlobalIDScalar]
})
export class StarWarsModule {}
