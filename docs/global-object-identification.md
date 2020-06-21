# Global Object Identification

For background information on what the Global Object Identification, see the following resources:
- [Global Object Identification - graphql.org](https://graphql.org/learn/global-object-identification/)
- [Specification - relay.dev](https://relay.dev/graphql/objectidentification.htm)

## Including the global id scalar

This package contains a `GlobalIdScalar` that handles the transformation of global ids at the interface layer, which must be registered as a provider.

```typescript
import { GlobalIdScalar } from 'nestjs-relay'

@Module({
  providers: [GlobalIdScalar]
})
export class CommonModule {}
```

> Note: this scalar will override the default functionality of the `ID` scalar that comes out of the box from `nestjs/graphql`.

## Implementing the node interface

The `NodeInterface` class will add the `id` field to the schema types.

```typescript
import { NodeInterface } from 'nestjs-relay'

@ObjectType({ implements: [NodeInterface] })
class Ship extends NodeInterface {
  @Field()
  name: string
}
```

> Note: the `implements` option of the `ObjectType` decorator registers the interface and the `id` field in the schema. Extending the `NodeInterface` class provides type safety to the resolvers.

## Implementing the id field resolver

Now that the `id` field has been added to the `Ship` type, the `GlobalIdFieldResolver` can be extended to implement the field resolver.

```typescript
import { GlobalIdFieldResolver } from 'nestjs-relay'

@Resolver(Ship)
class ShipResolver extends GlobalIdFieldResolver(Ship) {}
```

> Note: the default behaviour of the `id` field resolver will serialize a global id from either a `number`, `string` or `ResolvedGlobalId`.

## Implementing the node field resolver

Now that one of the schema types has implmented the node interface, we can implement the node root field. The `NodeFieldResolver` can be extended to implement the registering of the `node` and `nodes` root fields.

```typescript
import { NodeInterface, NodeFieldResolver } from 'nestjs-relay'

@Resolve(NodeInterface)
class NodeResolver extends NodeFieldResolver() {}
```

Next, implement the `resolveNode` method which contains the logic to resolve the `node` and `nodes` fields for each schema type that implements the node interface.

The suggested approach to implement the `resolveNode` method is to:
- determine the type from the global id, then
- resolve the object by calling a service method

```typescript
@Resolve(NodeInterface)
class NodeResolver extends NodeFieldResolver() {
  constructor(private shipService: ShipService) {
    super()
  }

  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'Ship':
        return this.shipService.findOneById(resolvedGlobalId.toString())
      default:
        return null
    }
  }
}
```

> Note: the `ResolvedGlobalId` class has the `toString` and `toNumber` helper methods.
> ```typescript
> const resolvedGlobalId = new ResolvedGlobalId({ type: 'Ship', id: '1' })
>
> console.log(resolvedGlobalId.toString()) // '1'
> console.log(resolvedGlobalId.toNumber()) // 1
> ```

## Conclusion

At this point, we have:
- a schema that complies with the Global Object Identification specification
- automated serialization and deserialization for global ids
- fully functional `node` and `nodes` root fields

The schema will look like the below:
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

For a more complete example, check out the `test/starwars-app` directory.
