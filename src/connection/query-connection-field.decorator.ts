import { Query, QueryOptions, ReturnTypeFunc } from '@nestjs/graphql';
import { MetadataStorage } from '../common';
import { ConnectionTypeFactory } from './connection-type.factory';

export function QueryConnection(
  nodeTypeFunc: ReturnTypeFunc,
  options?: Omit<QueryOptions, 'nullable'>,
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
    Query(() => connection, resolveFieldOptions)(target, key, descriptor);
  };
}
