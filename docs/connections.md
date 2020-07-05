<!-- omit in toc -->
# Connections

The second core assumption that Relay makes about a GraphQL API is that it provides a structure that allows a consumer to paginate through datasets.

There are several components involved in a `Connection`:
- The `PageInfo` type contains information that a client can use to determine whether more results in the dataset are available.
- An `Edge` type contains two fields:
  - the `node` field contains an item in the dataset (that implements the `Node` interface).
  - the `cursor` field contains an opaque string that points to the node's position in the dataset.
- A `Connection` can have a variety of arguments provided to it that a client can use to ask for a particular part of the dataset.

**Contents**
- [Register a Connection Field](#register-a-connection-field)
- [Register Connection Arguments](#register-connection-arguments)
  - [Forward Pagination](#forward-pagination)
  - [Backward Pagination](#backward-pagination)
  - [Both Directions](#both-directions)
- [Resolve Connection Data](#resolve-connection-data)
- [Conclusion](#conclusion)

## Register a Connection Field

The `ResolveConnectionField` decorator helps to abstract the detail of implementing a `Connection` down to its bare minimum.

Use the `ResolveConnectionField` decorator instead of the `ResolveField` decorator from `@nestjs/graphql`.

```typescript
import { Resolver } from '@nestjs/graphql'
import { ResolveConnectionField } from 'nestjs-relay'
import { Faction } from './faction.type'
import { Ship } from './ship.type'

@Resolver(Faction)
export class FactionResolver {
  @ResolveConnectionField(() => Ship)
  ships() {}
}
```

The first argument to the `ResolveConnectionField` decorator must be a function returning the node type. This type must implement the `Node` interface.

An optional second argument can be provided to pass additional options to the field that you would normally find in the `ResolveField` decorator from `@nestjs/graphql`.

At this point, your application's GraphQL Schema will contain the following changes:

```graphql
type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String!
  endCursor: String!
}

type ShipEdge {
  node: Ship
  cursor: String!
}

type ShipConnection {
  edges: [ShipEdge]
  pageInfo: PageInfo!
}

type Faction implements Node {
  ships: ShipConnection
}
```

## Register Connection Arguments

Now that the `Connection` field is registered in the schema, we need to provide a mechanism to allow clients to paginate through the dataset. Relay's Connection specification suggests different sets of arguments for different requirements.

### Forward Pagination

The `first` and `after` arguments will provide the ability to paginate forwards through a dataset.

**Example**

```typescript
import { Resolver, Args } from '@nestjs/graphql'
import { ResolveConnectionField, ForwardConnectionArgs } from 'nestjs-relay'
import { Faction } from './faction.type'
import { Ship } from './ship.type'

@Resolver(Faction)
export class FactionResolver {
  @ResolveConnectionField(() => Ship)
  ships(@Args() args: ForwardConnectionArgs) {}
}
```

Results in the following changes in the GraphQL schema:

```graphql
type Faction implements Node {
  ships(first: Int!, after: String): ShipConnection
}
```

### Backward Pagination

The `last` and `before` arguments will provide the ability to paginate backwards through a dataset.

**Example**

```typescript
import { Resolver, Args } from '@nestjs/graphql'
import { ResolveConnectionField, BackwardConnectionArgs } from 'nestjs-relay'
import { Faction } from './faction.type'
import { Ship } from './ship.type'

@Resolver(Faction)
export class FactionResolver {
  @ResolveConnectionField(() => Ship)
  ships(@Args() args: BackwardConnectionArgs) {}
}
```

Results in the following changes in the GraphQL schema:

```graphql
type Faction implements Node {
  ships(last: Int!, before: String): ShipConnection
}
```

### Both Directions

The ability to paginate in both directions can be achieved with both sets of arguments.

**Example**

```typescript
import { Resolver, Args } from '@nestjs/graphql'
import { ResolveConnectionField, ConnectionArgs } from 'nestjs-relay'
import { Faction } from './faction.type'
import { Ship } from './ship.type'

@Resolver(Faction)
export class FactionResolver {
  @ResolveConnectionField(() => Ship)
  ships(@Args() args: ConnectionArgs) {}
}
```

Results in the following changes in the GraphQL schema:

```graphql
type Faction implements Node {
  ships(
    first: Int,
    after: String,
    last: Int,
    before: String
  ): ShipConnection
}
```

## Resolve Connection Data

Now that we have registered the connection field and the arguments that we need, we need to use the arguments to fetch the relevant data.

The `graphql-relay` library contains some useful helper functions that we can use to ensure that the correct part of the dataset is returned.

```typescript
import { Resolver, Args } from '@nestjs/graphql'
import { ResolveConnectionField, ConnectionArgs } from 'nestjs-relay'
import { connectionFromArray } from 'graphql-relay'
import { FactionService } from './faction.service'
import { Faction } from './faction.type'
import { Ship } from './ship.type'

@Resolver(Faction)
export class FactionResolver {
  constructor(private factionService: FactionService) {
    super();
  }

  @ResolveConnectionField(() => Ship)
  ships(@Args() args: ConnectionArgs, @Parent() parent: Faction) {
    return connectionFromArray(
      this.factionService.getShips(parent.id.toString()),
      args
    );
  }
}
```

## Conclusion

At this point, your application's GraphQL schema will contain the changes outlined above as well as properly resolve paginated data.
