import { ReturnTypeFunc } from '@nestjs/graphql';

export interface CreatePayloadTypeArgs {
  typeFunc: ReturnTypeFunc;
  mutationName: string;
}

export class PayloadTypeFactory {
  static create(args: CreatePayloadTypeArgs) {}
}
