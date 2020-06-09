import { ReturnTypeFunc, MutationOptions, Mutation } from '@nestjs/graphql'

export function RelayMutation<T>(
  typeFunc: ReturnTypeFunc,
  options?: MutationOptions
): MethodDecorator {
  return (target: Object | Function, key: string | symbol, descriptor: any) => {
    Mutation(typeFunc, options)(target, key, descriptor)
  }
}
