import { ResolvedGlobalId as RelayResolvedGlobalId } from 'graphql-relay'

export class ResolvedGlobalId implements RelayResolvedGlobalId {
  type!: string
  id!: string
}

export const typeResolvedGlobalId = () => ResolvedGlobalId

export const typeResolvedGlobalIds = () => [ResolvedGlobalId]

export type GlobalId = ResolvedGlobalId | string | number

export const resolvedGlobalIdToString = (resolvedGlobalId: ResolvedGlobalId): string =>
  resolvedGlobalId.id

export const resolvedGlobalIdToNumber = (resolvedGlobalId: ResolvedGlobalId): number =>
  Number(resolvedGlobalId.id)
