import { ReturnTypeFunc } from '@nestjs/graphql';
import { AnyConstructor } from '../types';
import { PayloadMixin } from './payload.mixin';

export interface CreatePayloadTypeArgs {
  typeFunc: ReturnTypeFunc;
  mutationName: string;
}

export class PayloadTypeFactory {
  static create(args: CreatePayloadTypeArgs): AnyConstructor {
    const type = args.typeFunc() as AnyConstructor;
    const payloadType = PayloadMixin(type, args.mutationName);
    return payloadType;
  }
}
