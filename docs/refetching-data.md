<!-- omit in toc -->
# Refetching Data

The first core assumtpion that Relay makes about a GraphQL API is that is provides a mechanism for refetching an object. The following steps will configure your GraphQL API to provide this mechanism.

- [Include the Global ID Scalar](#include-the-global-id-scalar)
- [Create a Node Type](#create-a-node-type)
- [Resolve the `id` Field](#resolve-the-id-field)
- [Resolve the `node` and `nodes` Root Fields](#resolve-the-node-and-nodes-root-fields)


## Include the Global ID Scalar

The `GlobalIdScalar` helps to abstract the implementation of global identifiers from your application code by exporting a customised `ID` scalar that automatically handles transformations at the interface layer of the GraphQL API.

Include the `GlobalIdScalar` into a Nest module as in the example below.

```typescript
import { Module } from '@nestjs/common'
import { GlobalIdScalar } from 'nestjs-relay'

@Module({ providers: [GlobalIdScalar] })
export class CommonModule {}
```

> The global id scalar will override the default functionality of the `ID` scalar that comes out of the box from `nestjs/graphql`.

At this point, your application's GraphQL schema will remain unchanged.

## Create a Node Type

The `NodeType` decorator helps to abstract the implementation of node types within your application code, and is a drop-in replacement for the `ObjectType` decorator from `@nestjs/graphql`.

The `Ship` type class must also extend `NodeInterface`, which will add the `id` field to the schema.

```typescript
import { NodeType, NodeInterface } from 'nestjs-relay'

@NodeType()
export class Ship extends NodeInterface {
  @Field()
  name: string;
}
```

>The `NodeType` decorator accepts the same argument signatures as the `ObjectType` decorator from `@nestjs/graphql`.

> The `NodeType` decorator enables `Connections` to be aware of the name of the type.

At this point, your application's schema will contain the following changes:

```graphql
"""An object with an ID"""
interface Node {
  """The ID of the object"""
  id: ID!
}

type Ship implements Node {
  id: ID!
  name: String
}
```

## Resolve the `id` Field

Now that the `id` field has been added to the `Ship` type, we need to implement a custom resolver to ensure that a global id is resolved from the value we pass to it.

The `IdFieldResolver` function automatically implements the resolver behaviour for us.

```typescript
import { Resolver } from '@nestjs/graphql'
import { IdFieldResolver } from 'nestjs-relay'
import { Ship } from './ship.type'

@Resolver()
export class ShipResolver extends IdFieldResolver(Ship) {}
```

> The default behaviour of the `id` field resolver will serialize a global id from either a `number`, `string` or `ResolvedGlobalId`.

> A second argument can be provided to pass additional options to the `id` field that you would normally find in the `FieldResolver` decorator from `@nestjs/graphql`. This is currently limited to the `complexity` field, as the Relay specification requires this field to be named `'id'` and to be non-nullable.

At this point, your application's GraphQL schema will remain unchanged from the previous step.

## Resolve the `node` and `nodes` Root Fields

Now that each object of the `Ship` type can be uniquely identified, we can implement the `node` and `nodes` root fields. These root fields will allow a Relay client to refetch data by providing an `id`.

The `NodeFieldResolver` function automatically registers the `node` and `nodes` root fields in the GraphQL schema, allowing our application code to handle how to resolve each type.

```typescript
import { Resolver } from '@nestjs/graphql'
import { NodeInterface, NodeFieldResolver, ResolvedGlobalId } from 'nestjs-relay'

@Resolver(NodeInterface)
export class NodeResolver extends NodeFieldResolver() {
  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    return null
  }
}
```

> The resolver should be configured to resolve the `NodeInterface`; this enables it to return any schema type that implements the node interface.

The `NodeFieldResolver` class requires that your application code implements the `resolveNode` method, which should contain the logic for determining which *type* is being requested, then fetching the data for the specified *object* of that type.

```typescript
import { Resolver } from '@nestjs/graphql'
import { NodeInterface, NodeFieldResolver, ResolvedGlobalId } from 'nestjs-relay'
import { ShipService } from './ship.service'

@Resolver(NodeInterface)
export class NodeResolver extends NodeFieldResolver() {
  constructor(private shipService: ShipService) {
    super()
  }

  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch(resolvedGlobalId.type) {
      case: 'Ship':
        return this.shipService.findOneById(resolvedGlobalId.toString())
      default:
        return null
    }
  }
}
```

> The `ResolvedGlobalId` type has two properties: `type` and `id`.

The `ResolvedGlobalId` class has the `toString` and `toNumber` helper methods so that your application code can remain free of the conversion logic.

```typescript
const resolvedGlobalId = new ResolvedGlobalId({ type: 'Ship', id: '1' })

console.log(resolvedGlobalId.toString()) // '1'
console.log(resolvedGlobalId.toNumber()) // 1
```

At this point, your application's GraphQL schema will contain the following changes:

```graphql
type Query {
  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node

  """Fetches objects given their IDs"""
  nodes(
    """The IDs of objects"""
    ids: [ID!]!
  ): [Node]!
}
```
