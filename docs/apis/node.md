## Node

## `NodeInterface`

The `NodeInterface` is a class that implements the node interface compliant with the Relay Global Identification Specification.

### Behaviour

- Add the Node interface to the schema
- Add the `id` field to any object type that implements it
- Add the `id` property to any object that extends it

### Arguments

None.

### Examples

**Example 1: Minimum**
```typescript
import { ObjectType, Field } from '@nestjs/graphql'
import { NodeInterface } from 'nestjs-relay'

@ObjectType({ implements: [NodeInterface] })
class Animal extends NodeInterface {
  @Field()
  name: string
}
```

## `NodeFieldResolver`

The `NodeFieldResolver` is a function that returns an abstract resolver class, that implements the `node` root field.

### Behaviour

- Add the `node` root field to the schema
- Optionally, add the `nodes` root field to the schema
- Define a `resolveNode` method that must be implemented to resolve a node

### Arguments

**`options`**
- Type: `NodeFieldResolverOptions`
- Required: no
- Properties:
  - `includeNodesField` optionally defines the `nodes` root field

### Examples

**Example 1: Minimum**
```typescript
import { NodeFieldResolver, NodeInterface } from 'nestjs-relay'

@Resolve(NodeInterface)
class NodeResolver extends NodeFieldResolver() {
  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'Animal':
        // return ...
      default:
        return null
    }
  }
}
```

**Example 2: With Options**
```typescript
import {
  NodeInterface,
  NodeFieldResolver,
  ResolvedGlobalId
} from 'nestjs-relay'

@Resolve(NodeInterface)
class NodeResolver extends NodeFieldResolver({ includeNodesField: true }) {
  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'Animal':
        // return ...
      default:
        return null
    }
  }
}
```
