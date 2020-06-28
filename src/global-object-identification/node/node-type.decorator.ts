import { ObjectTypeOptions, ObjectType } from '@nestjs/graphql';
import { isString } from 'util';
import { NodeInterface } from './node.interface';
import { MetadataStorage, AnyConstructor } from '../../common';

export function NodeType(): ClassDecorator;

export function NodeType(options: ObjectTypeOptions): ClassDecorator;

export function NodeType(name: string, options?: ObjectTypeOptions): ClassDecorator;

export function NodeType<T extends AnyConstructor<T>>(
  nameOrOptions?: string | ObjectTypeOptions,
  objectTypeOptions?: ObjectTypeOptions,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function) => {
    const [name, options = {}] = isString(nameOrOptions)
      ? [nameOrOptions, objectTypeOptions]
      : [target.name, nameOrOptions];

    const interfaces = options.implements ? [].concat(options.implements as never) : [];

    const nodeOptions: ObjectTypeOptions = {
      ...options,
      implements: interfaces.concat(NodeInterface as never),
    };

    MetadataStorage.addClassMetadata({ name, target });
    ObjectType(name, nodeOptions)(target);
  };
}
