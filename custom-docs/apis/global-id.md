# Global ID

## `GlobalIdScalar`

The `GlobalIdScalar` implements the transformation between the string representation of a global id and a `ResolvedGlobalId`.

### Behaviour

- Overwrite the `ID` scalar provided by the `@nestjs/graphql` package
- Add transformation logic between `string` and `ResolvedGlobalId`

### Arguments

None.

### Examples

None.

## `GlobalIdFieldResolver`

The `GlobalIdFieldResolver` function implements the resolver for the `id` field for a given type.

### Behaviour

- Add resolver for the `id` field
- Return an `id` of `ResolvedGlobalId` type
- Transform an `id` of `string` to a `ResolvedGlobalId` type
- Transform an `id` of `number` to a `ResolvedGlobalId` type

### Arguments

**`classRef`**
- Type: `Class`
- Required: yes

### Examples

**Example 1: Minimum**
```typescript
import { Resolver } from '@nestjs/graphql'
import { GlobalIdFieldResolver } from 'nestjs-relay'
import { Faction } from '.'

@Resolver(Faction)
class FactionResolver extends GlobalIdFieldResolver(Faction) {}
```

## `ResolvedGlobalId`

The `ResolvedGlobalId` class defines helper functions for a resolved global id.

### Behaviour

- Expose method to transform the `id` to a string
- Expose method to transform the `id` to a number

### Arguments

None.

### Examples

**Example 1: Transformer Methods**
```typescript
const resolvedGlobalId = new ResolvedGlobalId()
resolvedGlobalId.type = 'Faction'
resolvedGlobalId.id = '1'

console.log(resolvedGlobalId.toString()) // '1'
console.log(resolvedGlobalId.toNumber()) // 1
```

## `GlobalId`

The `GlobalId` type provides type safety and allows the server to provide values for the `id` field that are `string` or `number` type.

### Behaviour

None.

### Arguments

None.

### Examples

**Example: Type Definition**
```typescript
type GlobalId = ResolvedGlobalId | string | number
```

## `GlobalIdField`

### Behaviour

- Set the schema type of the field as `ID` so that the `GlobalIdScalar` is used.

### Arguments

**`options`**
- Type: `GlobalIdFieldOptions`
- Required: no
- Properties:
  - `complexity` provide a number or complexity estimator

### Examples

**Example 1: Minimum**
```typescript
import { InterfaceType } from '@nestjs/graphql'
import { GlobalIdField, GlobalId } from 'nestjs-relay'

@InterfaceType()
class NodeInterface {
  @GlobalIdField()
  id!: GlobalId
}
```

**Example 2: With Options**
```typescript
import { InterfaceType } from '@nestjs/graphql'
import { GlobalIdField, GlobalId } from 'nestjs-relay'

@InterfaceType()
class NodeInterface {
  @GlobalIdField({ complexity: 1 })
  id!: GlobalId
}
```
