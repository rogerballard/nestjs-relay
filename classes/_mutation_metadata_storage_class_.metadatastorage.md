[nestjs-relay](../README.md) › [Globals](../globals.md) › ["mutation/metadata-storage.class"](../modules/_mutation_metadata_storage_class_.md) › [MetadataStorage](_mutation_metadata_storage_class_.metadatastorage.md)

# Class: MetadataStorage

## Hierarchy

* **MetadataStorage**

## Index

### Methods

* [addMethodMetadata](_mutation_metadata_storage_class_.metadatastorage.md#static-addmethodmetadata)
* [getMethodMetadata](_mutation_metadata_storage_class_.metadatastorage.md#static-getmethodmetadata)

## Methods

### `Static` addMethodMetadata

▸ **addMethodMetadata**(`args`: [MethodIdentifier](../interfaces/_mutation_metadata_storage_class_.methodidentifier.md) & [ParameterMetadata](../modules/_mutation_metadata_storage_class_.md#parametermetadata)): *void*

*Defined in [src/mutation/metadata-storage.class.ts:18](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/metadata-storage.class.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MethodIdentifier](../interfaces/_mutation_metadata_storage_class_.methodidentifier.md) & [ParameterMetadata](../modules/_mutation_metadata_storage_class_.md#parametermetadata) |

**Returns:** *void*

___

### `Static` getMethodMetadata

▸ **getMethodMetadata**(`__namedParameters`: object): *[ParameterMetadata](../modules/_mutation_metadata_storage_class_.md#parametermetadata)[]*

*Defined in [src/mutation/metadata-storage.class.ts:24](https://github.com/rogerballard/nestjs-relay/blob/e8933db/src/mutation/metadata-storage.class.ts#L24)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`key` | string &#124; symbol |
`target` | Object |

**Returns:** *[ParameterMetadata](../modules/_mutation_metadata_storage_class_.md#parametermetadata)[]*
