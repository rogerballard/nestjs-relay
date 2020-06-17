import { MetadataStorage, ParameterMetadata } from './metadata-storage.class';
import { MethodIdentifier } from './metadata-storage.class';

export interface CreateInputTypeArgs {
  params: ParameterMetadata[];
  mutationName: string;
}

export class InputTypeFactory {
  static create(args: MethodIdentifier) {
    const params = MetadataStorage.getMethodMetadata(args);

    if (params.length === 0) {
      /**
       * No parameters registered
       * -> Do not create input type for this mutation
       */
    }

    if (params.length === 1 && params[0].name === 'input') {
      /**
       * Single argument
       * Is an input type
       * -> Add the clientMutationId field
       */
    }

    /**
     * Multiple individual arguments
     * -> Construct an input type from them
     * -> Add the clientMutationId field
     */
  }
}
