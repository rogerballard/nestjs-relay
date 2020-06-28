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
  ): IntroduceShipOutput | null {
    const data = this.factionService.introduceShipToFaction(
      input.factionId.toString(),
      input.shipName,
    );
    if (!data) return null;

    return new IntroduceShipOutput(data);
  }
}
