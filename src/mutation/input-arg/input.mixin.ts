import { Field, InputType } from '@nestjs/graphql';
import { capitalise } from '../utils';
import { AnyConstructor, Mixin } from '../../common';

export const getInputName = (mutationName: string): string => capitalise(mutationName) + 'Input';

export type InputMixin = Mixin<typeof InputMixin>;

export function InputMixin<TBase extends AnyConstructor>(base: TBase, mutationName: string) {
  const name = getInputName(mutationName);

  @InputType(name)
  class Input extends base {
    @Field({
      name: 'clientMutationId',
      nullable: true,
    })
    clientMutationId?: string;
  }

  return Input;
}
