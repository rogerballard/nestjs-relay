import { Injectable } from '@nestjs/common'

@Injectable()
export class ShipService {
  private ships = [
    { id: 1, name: 'X-Wing' },
    { id: 2, name: 'Y-Wing' },
    { id: 3, name: 'A-Wing' },
    { id: 4, name: 'Millenium Falcon' },
    { id: 5, name: 'Home One' },
    { id: 6, name: 'TIE Fighter' },
    { id: 7, name: 'TIE Interceptor' },
    { id: 8, name: 'Executor' }
  ]

  public getShip(id: number) {
    return this.ships.find(ship => ship.id === id)
  }
}
