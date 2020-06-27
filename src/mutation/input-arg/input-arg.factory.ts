import { ArgsOptions } from '@nestjs/graphql';
import { InputMixin } from './input.mixin';
import { ParameterMetadata } from '../metadata-storage.class';
import { AnyConstructor } from '../../common';

export interface CreateInputTypeArgs {
  params: ParameterMetadata[];
  mutationName: string;
}

export type InputArgOptions = Pick<ArgsOptions, 'type' | 'description'> & {
  paramIndex: number;
};

export class InputArgFactory {
  static create(args: CreateInputTypeArgs): InputArgOptions {
    if (args.params.length === 0) {
      /**
       * No parameters registered
       * -> Do not create input type for this mutation
       */
      throw new Error(`Not detected any RelayArg declarations in ${args.mutationName}.`);
    }

    if (args.params.length > 1) {
      /**
       * Throw error that multiple inputs have been registered
       */
      throw new Error(`Detected multiple RelayArg declarations in ${args.mutationName}.`);
    }

    /**
     * Single argument
     * Is an input type
     * -> Add the clientMutationId field
     */
    const param = args.params[0];

    const type = param.typeFunc() as AnyConstructor;
    const inputType = InputMixin(type, args.mutationName);

    return {
      type: () => inputType,
      paramIndex: param.paramIndex,
      description: param.description,
    };
  }
}
