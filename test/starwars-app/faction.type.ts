import { ObjectType, Field } from '@nestjs/graphql';
import { ResolvedGlobalId, Node } from '../../src/nestjs-relay';
import { FactionDTO } from './faction.service';

@ObjectType({ implements: [Node] })
export class Faction implements Node {
  constructor(props: FactionDTO) {
    Object.assign(this, props);
  }

  @Field()
  id!: ResolvedGlobalId;

  @Field({ nullable: true })
  name?: string;
}
