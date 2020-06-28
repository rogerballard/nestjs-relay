import { ReturnTypeFunc, FieldOptions, ResolveField } from '@nestjs/graphql';
import { ConnectionTypeFactory } from './connection-type.factory';
import { MetadataStorage } from '../common';

export type ResolveConnectionFieldOptions = Omit<FieldOptions, 'nullable'>;

export function ResolveConnectionField(
  nodeTypeFunc: ReturnTypeFunc,
  options?: ResolveConnectionFieldOptions,
): MethodDecorator {
  return (target: Record<string, any>, key: string | symbol, descriptor: PropertyDescriptor) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const nodeType = nodeTypeFunc() as Function;
    const typeMetadata = MetadataStorage.getClassMetadata({ target: nodeType });

    const connection = ConnectionTypeFactory.create({
      nodeTypeFunc,
      nodeTypeName: typeMetadata.name,
    });

    const resolveFieldOptions = { ...options, nullable: true };
    ResolveField(() => connection, resolveFieldOptions)(target, key, descriptor);
  };
}
