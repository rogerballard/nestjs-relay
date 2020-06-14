import { ArgsOptions, Args, ReturnTypeFunc } from '@nestjs/graphql'
import { Storage } from './storage.helper'

export type RelayArgsOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type'>

export function RelayArgs<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayArgsOptions
): ParameterDecorator {
  return (target: Object | Function, key: string | symbol, paramIndex: number) => {
    Storage.storeParamData({ typeFunc, paramIndex, ...options }, { target, key })
  }
}
