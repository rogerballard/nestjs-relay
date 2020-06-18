[nestjs-relay](../README.md) › [Globals](../globals.md) › ["mutation/payload-type/payload.mixin"](_mutation_payload_type_payload_mixin_.md)

# Module: "mutation/payload-type/payload.mixin"

## Index

### Type aliases

* [PayloadMixin](_mutation_payload_type_payload_mixin_.md#payloadmixin)

### Functions

* [PayloadMixin](_mutation_payload_type_payload_mixin_.md#payloadmixin)
* [getPayloadName](_mutation_payload_type_payload_mixin_.md#const-getpayloadname)

## Type aliases

###  PayloadMixin

Ƭ **PayloadMixin**: *[Mixin](_mutation_types_.md#mixin)‹typeof PayloadMixin›*

*Defined in [src/mutation/payload-type/payload.mixin.ts:8](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/payload-type/payload.mixin.ts#L8)*

## Functions

###  PayloadMixin

▸ **PayloadMixin**‹**TBase**›(`base`: TBase, `mutationName`: string): *Payload & TBase*

*Defined in [src/mutation/payload-type/payload.mixin.ts:10](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/payload-type/payload.mixin.ts#L10)*

**Type parameters:**

▪ **TBase**: *[AnyConstructor](_mutation_types_.md#anyconstructor)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | TBase |
`mutationName` | string |

**Returns:** *Payload & TBase*

___

### `Const` getPayloadName

▸ **getPayloadName**(`mutationName`: string): *string*

*Defined in [src/mutation/payload-type/payload.mixin.ts:5](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/payload-type/payload.mixin.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`mutationName` | string |

**Returns:** *string*
