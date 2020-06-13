import { ArgsOptions } from '@nestjs/graphql'

export type RelayArgsOptions = ArgsOptions

export function RelayArgs<T>(options: RelayArgsOptions): ParameterDecorator {
  return (target: Object | Function, key: string | symbol, paramIndex: number) => {}
}
