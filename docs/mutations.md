<!-- omit in toc -->
# Mutations

The third core assumption that Relay makes about a GraphQL API is that there is a specific structure around mutations to make them more predictable.

The mutation conventions that Relay imposes can be summarised as:

- Every mutation must accept an argument, named `input`, that is an object.
- The name of the `input` type argument must be suffixed with `'Input'`.
- Every mutation must return an object type.
- The name of the returned object type must be suffixed with `'Payload'`.
- Both the `Input` and the `Payload` types must have a field named `clientMutationId` that is of type `string`.

**Contents**
- [Register a Mutation](#register-a-mutation)
- [Register an Input Type](#register-an-input-type)
- [Register the Input Argument](#register-the-input-argument)
- [Conclusion](#conclusion)

## Register a Mutation

The `RelayMutation` decorator helps to abstract the detail of implementing the structural conventions, such as the creation of an `Input` and `Payload` type that are specific to the mutation.

Use the `RelayMutation` decorator instead of the `Mutation` decorator from `@nestjs/graphql`.

```typescript
import { Resolver } from '@nestjs/graphql'
import { RelayMutation } from 'nestjs-relay'
import { Ship } from './ship.type'

@Resolver(Ship)
export class ShipResolver {
  @RelayMutation(() => Ship)
  buildShip() {
    return null
  }
}
```

The first argument of the `RelayMutation` decorator is a function that returns the payload type. This type does not need to have the `clientMutationId` field, as it will be added by the `RelayMutation` decorator. The name of the type will have `'Payload'` suffixed automatically.

A second argument can be provided to pass additional options to the mutation field that you would normally find in the `Mutation` decorator from `@nestjs/graphql`. Relay requires the `Payload` to be nullable, so the `nullable` property is not available as an option. The other options availabe in `@nestjs/graphql` are available.

## Register an Input Type

Next, we need to create an input type for the mutation so that we can specify the input arguments in the schema.

```typescript
import { InputType } from '@nestjs/graphql'

@InputType()
export class BuildShipInput {
  @Field()
  name: string;
}
```

> This type does not need to have the `clientMutationId` field, as it will be added by the `RelayMutation` decorator. The name of the type will have `'Input'` suffixed automatically.

## Register the Input Argument

Now that we have registered an input type for the mutation, we need to register it as an argument in the mutation.

The `InputArg` decorator ensures that the input argument complies with the structural conventions that are required by Relay.

```typescript
import { Resolver } from '@nestjs/graphql'
import { RelayMutation, InputArg } from 'nestjs-relay'
import { Ship } from './ship.type'
import { BuildShipInput } from './build-ship.input'

@Resolver(Ship)
export class ShipResolver {
  @RelayMutation(() => Ship)
  buildShip(@InputArg(() => BuildShipInput) input: BuildShipInput) {
    return null
  }
}
```

The first argument of the `InputArg` decorator must be a function returning the input type. The optional second argument allows additional properties to be provided; currently this is limited to the `description` property, as the input argument must be non-nullable.

The argument field will always be named `input` in the schema - regardless of what it is named in the method arguments. This means that you can name it differently, or destructure the object within the mutation resolver.

## Conclusion

At this point, your application's GraphQL schema will contain the following changes:

```graphql
input BuildShipInput {
  name: String!
  clientMutationId: String
}

type BuildShipPayload {
  ship: Ship
  clientMutationId: String
}

type Mutation {
  buildShip(input: BuildShipInput!): BuildShipPayload
}
```
