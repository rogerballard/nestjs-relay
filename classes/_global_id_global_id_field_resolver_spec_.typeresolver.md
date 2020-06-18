[nestjs-relay](../README.md) › [Globals](../globals.md) › ["global-id/global-id-field.resolver.spec"](../modules/_global_id_global_id_field_resolver_spec_.md) › [TypeResolver](_global_id_global_id_field_resolver_spec_.typeresolver.md)

# Class: TypeResolver

## Hierarchy

* [GlobalIdFieldResolver](../interfaces/_global_id_global_id_field_resolver_.globalidfieldresolver.md)

  ↳ **TypeResolver**

## Index

### Methods

* [id](_global_id_global_id_field_resolver_spec_.typeresolver.md#id)
* [GlobalIdFieldResolver](_global_id_global_id_field_resolver_spec_.typeresolver.md#static-globalidfieldresolver)

## Methods

###  id

▸ **id**(`parent`: [ResolverParent](../interfaces/_global_id_global_id_field_resolver_.resolverparent.md) | null, `info`: [ResolverInfo](../interfaces/_global_id_global_id_field_resolver_.resolverinfo.md)): *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

*Inherited from [GlobalIdFieldResolver](../interfaces/_global_id_global_id_field_resolver_.globalidfieldresolver.md).[id](../interfaces/_global_id_global_id_field_resolver_.globalidfieldresolver.md#id)*

*Defined in [src/global-id/global-id-field.resolver.ts:16](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/global-id/global-id-field.resolver.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [ResolverParent](../interfaces/_global_id_global_id_field_resolver_.resolverparent.md) &#124; null |
`info` | [ResolverInfo](../interfaces/_global_id_global_id_field_resolver_.resolverinfo.md) |

**Returns:** *[ResolvedGlobalId](_global_id_resolved_global_id_class_.resolvedglobalid.md)*

___

### `Static` GlobalIdFieldResolver

▸ **GlobalIdFieldResolver**‹**T**›(`classRef`: Type‹T›): *Type‹[GlobalIdFieldResolver](../interfaces/_global_id_global_id_field_resolver_.globalidfieldresolver.md)›*

*Defined in [src/global-id/global-id-field.resolver.ts:19](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/global-id/global-id-field.resolver.ts#L19)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`classRef` | Type‹T› |

**Returns:** *Type‹[GlobalIdFieldResolver](../interfaces/_global_id_global_id_field_resolver_.globalidfieldresolver.md)›*
