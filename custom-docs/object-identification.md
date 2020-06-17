# Implementing the Global Object Identification Specification

For background, please see the [official specificiation](https://relay.dev/graphql/objectidentification.htm).

## Implementing the Global ID Scalar

The `nestjs-relay` package includes a custom scalar that handles the transformation of an inbound `id` to a `ResolvedGlobalId`.

### Anatomy of a Global ID


----
**Example: Inbound transformation**

Suppose the following operation is being executed from a client:
```graphql
query FindUserQuery {
  findUser(id: "VXNlcjox") {
    name
  }
}
```

The global id scalar will automatically handle the transformation into something the server can use.

```typescript
@Query()
findUser(@Args() id: ResolvedGlobalId) {
  console.log(id) // { type: 'User', id: '1' }
  ...
}
```


## Implementing the Node Interface

> The server must provide an interface called Node. That interface must include exactly one field, called id that returns a non‐null ID.
>
> This id should be a globally unique identifier for this object, and given just this id, the server should be able to refetch the object.

**Example**

```typescript
import { Node } from 'nestjs-relay'

@ObjectType({ implements: [Node] })
class User implements Node {
  @Field()
  name!: string
}
```

> **Note:** The `ObjectType` decorator implements the Node interface in the schema.

> **Note:** The `User` class definition implements the Node interface for type safety.


This results in the generation of the following schema snippet:
```graphql
"""An object with an ID"""
interface Node {
  """The ID of the object"""
  id: ID!
}

type User implements Node {
  id: ID!
  name: String!
}
```

## Implementing the Node Root Fields

> The server must provide a root field called node that returns the Node interface. This root field must take exactly one argument, a non‐null ID named id.
>
> If a query returns an object that implements Node, then this root field should refetch the identical object when value returned by the server in the Node‘s id field is passed as the id parameter to the node root field.
>
> The server must make a best effort to fetch this data, but it may not always be possible; for example, the server may return a User with a valid id, but when the request is made to refetch that user with the node root field, the user’s database may be unavailable, or the user may have deleted their account. In this case, the result of querying this field should be null.

**Example**

```typescript
import { Node, NodeFieldsDefinition } from 'nestjs-relay'

@Resolver(Node)
class NodeFieldsResolver extends NodeFieldsDefinition {}
```

The `NodeFieldsDefinition` registers the root fields for `node` and `nodes` in the schema.

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

In order for the server to be able to resolve an object by its id, the `NodeFieldsResolver` class must implement the `resolveNode` method. This method is used to resolve data for both the `node` and `nodes` root fields.

```typescript
import {
  Node,
  NodeFieldsDefinition,
  ResolvedGlobalId,
  resolvedGlobalIdToNumber
} from 'nestjs-relay'

@Resolver(Node)
class NodeFieldsResolver extends NodeFieldsDefinition {
  constructor(private userService: UserService) {
    super();
  }

  resolveNode(resolvedGlobalId: ResolvedGlobalId) {
    switch (resolvedGlobalId.type) {
      case 'User':
        const id: number = resolvedGlobalIdToNumber(resolvedGlobalId)
        const user = this.userService.getById(id)
        return user ? new User(user) : null
      default:
        return null
    }
  }
}
```

> **Note:** It is important to return an instance of the class you are resolving. In this case, the `resolveNode` method returns an instance of the `User` class.

> **Note:** The `resolvedGlobalIdToString` helper function can also be imported from the `nodejs-relay` package.

