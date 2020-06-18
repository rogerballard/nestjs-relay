[nestjs-relay](../README.md) › [Globals](../globals.md) › ["mutation/relay-mutation.decorator"](_mutation_relay_mutation_decorator_.md)

# Module: "mutation/relay-mutation.decorator"

## Index

### Type aliases

* [RelayMutationOptions](_mutation_relay_mutation_decorator_.md#relaymutationoptions)

### Functions

* [RelayMutation](_mutation_relay_mutation_decorator_.md#relaymutation)

## Type aliases

###  RelayMutationOptions

Ƭ **RelayMutationOptions**: *Omit‹MutationOptions, "nullable"›*

*Defined in [src/mutation/relay-mutation.decorator.ts:7](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/relay-mutation.decorator.ts#L7)*

## Functions

###  RelayMutation

▸ **RelayMutation**‹**T**›(`typeFunc`: ReturnTypeFunc, `options?`: [RelayMutationOptions](_mutation_relay_mutation_decorator_.md#relaymutationoptions)): *MethodDecorator*

*Defined in [src/mutation/relay-mutation.decorator.ts:9](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/relay-mutation.decorator.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`typeFunc` | ReturnTypeFunc |
`options?` | [RelayMutationOptions](_mutation_relay_mutation_decorator_.md#relaymutationoptions) |

**Returns:** *MethodDecorator*
