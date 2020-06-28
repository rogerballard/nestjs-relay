import { ReturnTypeFunc } from '@nestjs/graphql';
import { PayloadMixin } from './payload.mixin';
import { AnyConstructor } from '../../common';

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
