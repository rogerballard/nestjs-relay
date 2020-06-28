import { ObjectType, Field } from '@nestjs/graphql';
import { capitalise } from '../utils';
import { AnyConstructor, Mixin } from '../../common';

export const getPayloadName = (mutationName: string): string =>
  capitalise(mutationName) + 'Payload';

export type PayloadMixin = Mixin<typeof PayloadMixin>;

export function PayloadMixin<TBase extends AnyConstructor>(base: TBase, mutationName: string) {
  const name = getPayloadName(mutationName);

  @ObjectType(name)
  class Payload extends base {
    @Field({
      name: 'clientMutationId',
      nullable: true,
    })
    clientMutationId?: string;
  }

  return Payload;
}
