import { Field } from '@nestjs/graphql';
import { NodeInterface, NodeType } from '../../src/nestjs-relay';
import { ShipDTO } from './ship.service';

@NodeType()
export class Ship extends NodeInterface {
  constructor(props: ShipDTO) {
    super();
    Object.assign(this, props);
  }

  @Field({ nullable: true })
  name?: string;
}
