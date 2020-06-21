# Mutations

There are three criteria for a Relay-compatible mutation:
1. The mutation must accept an argument, named `input`, that is an object. By convention, the type name of the input object should be suffixed with `'Input'`.
2. The mutation must return an object. By convention, the type name of the returned object should be suffixed with `'Payload'`.
3. Both the `Input` and the `Payload` types must have a field named `clientMutationId` of type `string`.

For further background information, see the following resources:
- [Specification - relay.dev](https://relay.dev/docs/en/graphql-server-specification#mutations)

## Registering a mutation

The `RelayMutation` decorator can be used to register a relay-compliant mutation, which will handle the `Input`, `Payload` and `clientMutationId` requirements.

First, use the `RelayMutation` decorator within a resolver class.

```typescript
import { RelayMutation } from 'nestjs-relay'

@Resolver(Ship)
export class ShipResolver {
  @RelayMutation(() => Ship)
  buildShip() {}
}
```

> Note: the `RelayMutation` decorator abstracts some options from the `Mutation` decorator in `nestjs/graphql`. This enables the `RelayMutation` decorator to ensure that the schema it produces will comply with the specification.

## Registering an input type

First, we need to create an input type for the mutation, which we can do using the `InputType` decorator from `nestjs/graphql`.

```typescript
@InputType()
export class BuildShipInput {
  @Field()
  name: string;
}
```

Then we can use the `InputArg` decorator in the mutation declaration, and the `Input` type will be created for us.

```typescript
import { RelayMutation, InputArg } from 'nestjs-relay'

@Resolver(Ship)
export class ShipResolver {
  @RelayMutation(() => Ship)
  buildShip(@InputArg(() => BuildShipInput) input: BuildShipInput) {
    //
  }
}
```

> Note: use the `InputArg` decorator - rather than the `Args` decorator from `nestjs/graphql` - to ensure that the schema complies with the specification.

## Conclusion

At this point, we have:
- registed a spec-compliant mutation
- generated the input and payload types in the background
- the `RelayMutation` decorator handles the returning of the `clientMutationId` automatically

The schema will look like the below:
```graphql
# includes schema from global object identification guide

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
