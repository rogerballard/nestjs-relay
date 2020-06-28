import { Field } from '@nestjs/graphql';
import { NodeInterface, NodeType } from '../../src/nestjs-relay';
import { FactionDTO } from './faction.service';
@NodeType()
export class Faction extends NodeInterface {
  constructor(props: FactionDTO) {
    super();
    Object.assign(this, props);
  }

  @Field({ nullable: true })
  name?: string;
}
