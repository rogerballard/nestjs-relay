import { ResolvedGlobalId as RelayResolvedGlobalId } from 'graphql-relay';

export class ResolvedGlobalId implements RelayResolvedGlobalId {
  type!: string;
  id!: string;

  constructor(args?: RelayResolvedGlobalId) {
    this.type = args?.type;
    this.id = args?.id;
  }

  toString() {
    return this.id;
  }

  toNumber() {
    return Number(this.id);
  }
}

export const typeResolvedGlobalId = () => ResolvedGlobalId;

export const typeResolvedGlobalIds = () => [ResolvedGlobalId];
