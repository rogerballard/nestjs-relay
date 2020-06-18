[nestjs-relay](../README.md) › [Globals](../globals.md) › ["mutation/relay-arg.decorator"](_mutation_relay_arg_decorator_.md)

# Module: "mutation/relay-arg.decorator"

## Index

### Type aliases

* [RelayArgOptions](_mutation_relay_arg_decorator_.md#relayargoptions)

### Functions

* [RelayArg](_mutation_relay_arg_decorator_.md#relayarg)

## Type aliases

###  RelayArgOptions

Ƭ **RelayArgOptions**: *Omit‹ArgsOptions, "name" | "nullable" | "type" | "defaultValue"›*

*Defined in [src/mutation/relay-arg.decorator.ts:4](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/relay-arg.decorator.ts#L4)*

## Functions

###  RelayArg

▸ **RelayArg**‹**T**›(`typeFunc`: ReturnTypeFunc, `options?`: [RelayArgOptions](_mutation_relay_arg_decorator_.md#relayargoptions)): *ParameterDecorator*

*Defined in [src/mutation/relay-arg.decorator.ts:6](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/relay-arg.decorator.ts#L6)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`typeFunc` | ReturnTypeFunc |
`options?` | [RelayArgOptions](_mutation_relay_arg_decorator_.md#relayargoptions) |

**Returns:** *ParameterDecorator*
