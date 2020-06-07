import { Injectable } from '@nestjs/common'
import { ResolvedGlobalId } from '../../src/nestjs-relay-tools'

export interface ShipDTO {
  id: ResolvedGlobalId
  name: string
}

@Injectable()
export class ShipService {
  private ships = [
    {
      id: { type: 'Ship', id: '1' },
      name: 'X-Wing'
    },
    {
      id: { type: 'Ship', id: '2' },
      name: 'Y-Wing'
    },
    {
      id: { type: 'Ship', id: '3' },
      name: 'A-Wing'
    },
    {
      id: { type: 'Ship', id: '4' },
      name: 'Millenium Falcon'
    },
    {
      id: { type: 'Ship', id: '5' },
      name: 'Home One'
    },
    {
      id: { type: 'Ship', id: '6' },
      name: 'TIE Fighter'
    },
    {
      id: { type: 'Ship', id: '7' },
      name: 'TIE Interceptor'
    },
    {
      id: { type: 'Ship', id: '8' },
      name: 'Executor'
    }
  ]

  public getShip(id: string) {
    return this.ships.find(ship => ship.id.id === id)
  }
}
