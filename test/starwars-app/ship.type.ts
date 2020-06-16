import { ObjectType, Field } from '@nestjs/graphql';
import { NodeInterface, ResolvedGlobalId } from '../../src/nestjs-relay';
import { ShipDTO } from './ship.service';

@ObjectType({ implements: [NodeInterface] })
export class Ship implements NodeInterface {
  constructor(props: ShipDTO) {
    Object.assign(this, props);
  }

  @Field()
  id!: ResolvedGlobalId;

  @Field({ nullable: true })
  name?: string;
}
