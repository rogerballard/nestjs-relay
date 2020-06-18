[nestjs-relay](../README.md) › [Globals](../globals.md) › ["global-id/global-id.scalar"](../modules/_global_id_global_id_scalar_.md) › [GlobalIdScalar](_global_id_global_id_scalar_.globalidscalar.md)

# Class: GlobalIdScalar

## Hierarchy

* **GlobalIdScalar**

## Implements

* CustomScalar‹string, [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)›

## Index

### Methods

* [parseLiteral](_global_id_global_id_scalar_.globalidscalar.md#parseliteral)
* [parseValue](_global_id_global_id_scalar_.globalidscalar.md#parsevalue)
* [serialize](_global_id_global_id_scalar_.globalidscalar.md#serialize)

## Methods

###  parseLiteral

▸ **parseLiteral**(`ast`: ValueNode): *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

*Defined in [src/global-id/global-id.scalar.ts:20](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/global-id/global-id.scalar.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`ast` | ValueNode |

**Returns:** *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

___

###  parseValue

▸ **parseValue**(`value`: string): *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

*Defined in [src/global-id/global-id.scalar.ts:8](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/global-id/global-id.scalar.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

___

###  serialize

▸ **serialize**(`value`: [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)): *string*

*Defined in [src/global-id/global-id.scalar.ts:16](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/global-id/global-id.scalar.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md) |

**Returns:** *string*
