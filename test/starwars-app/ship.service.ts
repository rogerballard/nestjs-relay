import { Injectable } from '@nestjs/common';

export interface ShipDTO {
  id: number;
  name: string;
}

@Injectable()
export class ShipService {
  private ships: ShipDTO[] = [
    {
      id: 1,
      name: 'X-Wing',
    },
    {
      id: 2,
      name: 'Y-Wing',
    },
    {
      id: 3,
      name: 'A-Wing',
    },
    {
      id: 4,
      name: 'Millenium Falcon',
    },
    {
      id: 5,
      name: 'Home One',
    },
    {
      id: 6,
      name: 'TIE Fighter',
    },
    {
      id: 7,
      name: 'TIE Interceptor',
    },
    {
      id: 8,
      name: 'Executor',
    },
  ];

  private nextShipId = 9;

  public getShip(id: number) {
    return this.ships.find((ship) => ship.id === id);
  }

  public createShip(name: string) {
    const id = this.nextShipId++;
    this.ships.push({ id, name });
    return this.getShip(id);
  }
}
