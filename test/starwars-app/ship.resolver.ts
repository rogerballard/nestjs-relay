import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GlobalIdFieldResolver, RelayMutation } from '../../src/nestjs-relay';
import { Ship } from './ship.type';
import { IntroduceShipOutput } from './introduce-ship.output';
import { IntroduceShipInput } from './introduce-ship.input';
import { ShipService } from './ship.service';
import { FactionService } from './faction.service';
import { RelayArgs } from '../../src/mutation/relay-args.decorator';

@Resolver(Ship)
export class ShipResolver extends GlobalIdFieldResolver(Ship) {
  constructor(private shipService: ShipService, private factionService: FactionService) {
    super();
  }

  @RelayMutation(() => IntroduceShipOutput, {
    name: 'introduceShip',
  })
  introduceShip(
    @RelayArgs(() => IntroduceShipInput) input: IntroduceShipInput,
  ): IntroduceShipOutput {
    const ship = this.shipService.createShip(input.shipName, input.factionId.id);
    const faction = this.factionService.getFaction(input.factionId.id);

    return new IntroduceShipOutput({ ship, faction });
  }
}
