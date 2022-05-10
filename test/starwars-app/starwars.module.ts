import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GlobalIdScalar } from '../../src/nestjs-relay';
import { ShipService } from './ship.service';
import { FactionService } from './faction.service';
import { NodeResolver } from './node.resolver';
import { FactionResolver } from './faction.resolver';
import { ShipResolver } from './ship.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: './test/starwars-app/schema.gql',
    }),
  ],
  providers: [
    FactionResolver,
    FactionService,
    NodeResolver,
    ShipResolver,
    ShipService,
    GlobalIdScalar,
  ],
})
export class StarWarsModule {}
