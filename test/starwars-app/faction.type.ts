import { ObjectType, Field } from '@nestjs/graphql';
import { ResolvedGlobalId, NodeInterface } from '../../src/nestjs-relay';
import { FactionDTO } from './faction.service';

@ObjectType({ implements: [NodeInterface] })
export class Faction implements NodeInterface {
  constructor(props: FactionDTO) {
    Object.assign(this, props);
  }

  @Field()
  id!: ResolvedGlobalId;

  @Field({ nullable: true })
  name?: string;
}
