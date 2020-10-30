import { Injectable } from '@nestjs/common';
import { ShipService } from './ship.service';

export interface FactionDTO {
  id: string;
  name: string;
  ships: number[];
}

@Injectable()
export class FactionService {
  constructor(private shipService: ShipService) {}

  private factions: FactionDTO[] = [
    {
      id: '1',
      name: 'Alliance to Restore the Republic',
      ships: [1, 2, 3, 4, 5],
    },
    {
      id: '2',
      name: 'Galactic Empire',
      ships: [6, 7, 8],
    },
  ];

  public getFaction(id: string) {
    return this.factions.find((faction) => faction.id === id);
  }

  public getRebels() {
    return this.getFaction('1');
  }

  public getEmpire() {
    return this.getFaction('2');
  }

  public assignShip(factionId: string, shipId: number) {
    const factionIndex = this.factions.findIndex((faction) => faction.id === factionId);
    this.factions[factionIndex].ships.push(shipId);
  }

  public introduceShipToFaction(factionId: string, name: string) {
    const ship = this.shipService.createShip(name);
    if (!ship) return null;

    this.assignShip(factionId, ship.id);

    return {
      faction: this.getFaction(factionId),
      ship,
    };
  }

  public getFactions() {
    return this.factions;
  }

  public getShips(factionId: string) {
    const faction = this.getFaction(factionId);
    return faction ? faction.ships.map((shipId) => this.shipService.getShip(shipId)) : [];
  }
}
