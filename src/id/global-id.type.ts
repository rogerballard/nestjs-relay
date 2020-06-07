export class GlobalID {
  constructor(type: string, id: number) {
    this.type = type
    this.id = id
  }
  type: string
  id: number
}

export const typeGlobalID = () => GlobalID

export const typeGlobalIDs = () => [GlobalID]
