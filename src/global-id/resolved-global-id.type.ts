import { ResolvedGlobalId as RelayResolvedGlobalId } from 'graphql-relay'

export class ResolvedGlobalId implements RelayResolvedGlobalId {
  type!: string
  id!: string
}

export const typeResolvedGlobalId = () => ResolvedGlobalId

export const typeResolvedGlobalIds = () => [ResolvedGlobalId]
