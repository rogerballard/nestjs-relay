import { ArgsOptions, Args, ReturnTypeFunc } from '@nestjs/graphql'
import { InputMixin } from './input.mixin'
import { AnyConstructor } from './types'

export type RelayArgsOptions = Omit<ArgsOptions, 'name' | 'nullable' | 'type'>

export function RelayArgs<T>(
  typeFunc: ReturnTypeFunc,
  options?: RelayArgsOptions
): ParameterDecorator {
  return (target: Object | Function, key: string | symbol, paramIndex: number) => {
    const inputType = typeFunc() as AnyConstructor
    const mutationName = 'IntroduceShip'

    const input = InputMixin(inputType, { mutationName })

    const argsOptions: ArgsOptions = {
      ...options,
      name: 'input',
      nullable: false,
      type: () => input
    }

    Args(argsOptions)(target, key, paramIndex)
  }
}
