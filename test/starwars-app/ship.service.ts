import { Injectable } from '@nestjs/common'
import { GlobalID } from '../../src/nestjs-relay-tools'

export interface ShipDTO {
  id: GlobalID
  name: string
}

@Injectable()
export class ShipService {
  private ships = [
    {
      id: new GlobalID('Ship', 1),
      name: 'X-Wing'
    },
    {
      id: new GlobalID('Ship', 2),
      name: 'Y-Wing'
    },
    {
      id: new GlobalID('Ship', 3),
      name: 'A-Wing'
    },
    {
      id: new GlobalID('Ship', 4),
      name: 'Millenium Falcon'
    },
    {
      id: new GlobalID('Ship', 5),
      name: 'Home One'
    },
    {
      id: new GlobalID('Ship', 6),
      name: 'TIE Fighter'
    },
    {
      id: new GlobalID('Ship', 7),
      name: 'TIE Interceptor'
    },
    {
      id: new GlobalID('Ship', 8),
      name: 'Executor'
    }
  ]

  public getShip(id: number) {
    return this.ships.find(ship => ship.id.id === id)
  }
}
