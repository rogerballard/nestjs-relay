import { Resolver } from '@nestjs/graphql';
import { GlobalIdFieldResolver, RelayMutation, InputArg } from '../../src/nestjs-relay';
import { Ship } from './ship.type';
import { IntroduceShipOutput } from './introduce-ship.output';
import { IntroduceShipInput } from './introduce-ship.input';
import { ShipService } from './ship.service';
import { FactionService } from './faction.service';

@Resolver(Ship)
export class ShipResolver extends GlobalIdFieldResolver(Ship) {
  constructor(private shipService: ShipService, private factionService: FactionService) {
    super();
  }

  @RelayMutation(() => IntroduceShipOutput, {
    name: 'introduceShip',
  })
  introduceShip(
    @InputArg(() => IntroduceShipInput) input: IntroduceShipInput,
  ): IntroduceShipOutput {
    const ship = this.shipService.createShip(input.shipName, input.factionId.id);
    const faction = this.factionService.getFaction(input.factionId.id);

    return new IntroduceShipOutput({ ship, faction });
  }
}
