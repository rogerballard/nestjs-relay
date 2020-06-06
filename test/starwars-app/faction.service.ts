import { Injectable } from '@nestjs/common'
import { GlobalID } from '../../src/id'

export interface FactionDTO {
  id: GlobalID
  name: string
  ships: number[]
}

@Injectable()
export class FactionService {
  private factions: FactionDTO[] = [
    {
      id: new GlobalID('Faction', 1),
      name: 'Alliance to Restore the Republic',
      ships: [1, 2, 3, 4, 5]
    },
    {
      id: new GlobalID('Faction', 2),
      name: 'Galactic Empire',
      ships: [6, 7, 8]
    }
  ]

  public getFaction(id: number) {
    return this.factions.find(faction => faction.id.id === id)
  }

  public getRebels() {
    return this.getFaction(1)
  }

  public getEmpire() {
    return this.getFaction(2)
  }
}
