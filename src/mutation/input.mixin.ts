import { Field, InputType } from '@nestjs/graphql';
import { getInputName } from './helpers';
import { Mixin, AnyConstructor } from './types';

export interface InputMixinOptions {
  mutationName: string;
}

export function InputMixin<TBase extends AnyConstructor>(base: TBase, options: InputMixinOptions) {
  const name = getInputName(options.mutationName);

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

export type InputMixin = Mixin<typeof InputMixin>;
