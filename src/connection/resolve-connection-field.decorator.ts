import { ReturnTypeFunc, FieldOptions, ResolveField } from '@nestjs/graphql';
import { ConnectionTypeFactory } from './connection-type.factory';

export type ResolveConnectionFieldOptions = Omit<FieldOptions, 'nullable'>;

export function ResolveConnectionField(
  nodeTypeName: string,
  nodeTypeFunc: ReturnTypeFunc,
  options?: ResolveConnectionFieldOptions,
): MethodDecorator {
  return (target: Record<string, any>, key: string | symbol, descriptor: PropertyDescriptor) => {
    const connection = ConnectionTypeFactory.create({
      nodeTypeFunc,
      nodeTypeName,
    });

    const resolveFieldOptions = { ...options, nullable: true };
    ResolveField(() => connection, resolveFieldOptions)(target, key, descriptor);
  };
}
