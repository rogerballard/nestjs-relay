[nestjs-relay](../README.md) › [Globals](../globals.md) › ["node/node-field.resolver"](../modules/_node_node_field_resolver_.md) › [NodeFieldResolver](_node_node_field_resolver_.nodefieldresolver.md)

# Class: NodeFieldResolver

## Hierarchy

* **NodeFieldResolver**

## Implements

* [NodeResolver](../interfaces/_node_node_field_resolver_.noderesolver.md)

## Index

### Methods

* [node](_node_node_field_resolver_.nodefieldresolver.md#node)
* [nodes](_node_node_field_resolver_.nodefieldresolver.md#nodes)
* [resolveNode](_node_node_field_resolver_.nodefieldresolver.md#resolvenode)

## Methods

###  node

▸ **node**(`id`: [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)): *[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)*

*Defined in [src/node/node-field.resolver.ts:28](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/node/node-field.resolver.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md) |

**Returns:** *[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)*

___

###  nodes

▸ **nodes**(`ids`: [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)[]): *Promise‹[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)[]›*

*Defined in [src/node/node-field.resolver.ts:45](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/node/node-field.resolver.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)[] |

**Returns:** *Promise‹[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)[]›*

___

###  resolveNode

▸ **resolveNode**(`id`: [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)): *[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)*

*Implementation of [NodeResolver](../interfaces/_node_node_field_resolver_.noderesolver.md)*

*Defined in [src/node/node-field.resolver.ts:19](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/node/node-field.resolver.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md) |

**Returns:** *[ResolvedNode](../modules/_node_node_field_resolver_.md#resolvednode)*
