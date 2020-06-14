import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GlobalIdScalar } from '../../src/nestjs-relay';
import { ShipService } from './ship.service';
import { FactionService } from './faction.service';
import { NodeFieldsResolver } from './node.resolver';
import { FactionResolver } from './faction.resolver';
import { ShipResolver } from './ship.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './test/starwars-app/schema.gql',
    }),
  ],
  providers: [
    FactionResolver,
    FactionService,
    NodeFieldsResolver,
    ShipResolver,
    ShipService,
    GlobalIdScalar,
  ],
})
export class StarWarsModule {}
