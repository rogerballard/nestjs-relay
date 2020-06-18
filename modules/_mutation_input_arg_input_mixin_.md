[nestjs-relay](../README.md) › [Globals](../globals.md) › ["mutation/input-arg/input.mixin"](_mutation_input_arg_input_mixin_.md)

# Module: "mutation/input-arg/input.mixin"

## Index

### Type aliases

* [InputMixin](_mutation_input_arg_input_mixin_.md#inputmixin)

### Functions

* [InputMixin](_mutation_input_arg_input_mixin_.md#inputmixin)
* [getInputName](_mutation_input_arg_input_mixin_.md#const-getinputname)

## Type aliases

###  InputMixin

Ƭ **InputMixin**: *[Mixin](_mutation_types_.md#mixin)‹typeof InputMixin›*

*Defined in [src/mutation/input-arg/input.mixin.ts:7](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/input-arg/input.mixin.ts#L7)*

## Functions

###  InputMixin

▸ **InputMixin**‹**TBase**›(`base`: TBase, `mutationName`: string): *Input & TBase*

*Defined in [src/mutation/input-arg/input.mixin.ts:9](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/input-arg/input.mixin.ts#L9)*

**Type parameters:**

▪ **TBase**: *[AnyConstructor](_mutation_types_.md#anyconstructor)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | TBase |
`mutationName` | string |

**Returns:** *Input & TBase*

___

### `Const` getInputName

▸ **getInputName**(`mutationName`: string): *string*

*Defined in [src/mutation/input-arg/input.mixin.ts:5](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/input-arg/input.mixin.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`mutationName` | string |

**Returns:** *string*
