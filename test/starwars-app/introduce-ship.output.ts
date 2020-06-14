import { ObjectType, Field } from '@nestjs/graphql';
import { Ship } from './ship.type';
import { Faction } from './faction.type';
import { ShipDTO } from './ship.service';
import { FactionDTO } from './faction.service';

export interface IntroduceShipOutputArgs {
  ship?: ShipDTO;
  faction?: FactionDTO;
}

@ObjectType()
export class IntroduceShipOutput {
  constructor(args: IntroduceShipOutputArgs) {
    this.ship = args.ship ? new Ship(args.ship) : undefined;
    this.faction = args.faction ? new Faction(args.faction) : undefined;
  }

  @Field({ nullable: true })
  ship?: Ship;

  @Field({ nullable: true })
  faction?: Faction;
}
