import { ResolveField, FieldOptions } from '@nestjs/graphql';
import { typeResolvedGlobalId } from './resolved-global-id.class';

export type GlobalIdFieldOptions = Pick<FieldOptions, 'complexity'>;

export const GlobalIdField = (options?: GlobalIdFieldOptions) =>
  ResolveField(typeResolvedGlobalId, {
    name: 'id',
    nullable: false,
    ...options,
  });
