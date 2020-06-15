# Developer Experience

## Global ID

**`ResolvedGlobalId` Class**

- Type definition
- Can be transformed into a `string` or `number`

**`GlobalIdScalar` Scalar**

- Overwrite the `ID` scalar in the schema
- Transforms an incoming `ID` to the `ResolvedGlobalId` type

**`GlobalIdFieldResolver` Class**

- Creates a resolver for the `id` field
- Returns the `ResolvedGlobalId` type
- Could be a decorator -> mixin

**`GlobalId` Type**

- Helper type that can be `ResolvedGlobalId` or `string` or `number`

## Node

**`NodeInterface` Class**

- Adds the `id` field to the schema of every type that extends it

**`NodeFieldDefinition` Class**

- Add the `node` root field to the schema
- Provide a means to implement the resolver
- Could be a decorator -> mixin

**`NodesFieldDefinition` Class**

- Add the `nodes` root field to the schema
- Provide a means to implement the resolver
- Could be a decorator -> mixin?

## Mutation

**`RelayMutation` MethodDecorator**

- Construct the Input type with the `InputMixin`
- Add the Input type to the schema
- Construct the Payload type with the `PayloadMixin`
- Add the Payload type to the schema
- Passes the `clientMutationId` arg around the method
- Add the mutation to the schema

**`RelayArg` Decorator**

- Provide `typeFunc` and other options from the `Args` decorator to the `RelayMutation` decorator.
- Expects one single object to be defined

**`RelayArgs` Decorator**

- Provide arguments to the `RelayMutation` decorator
- Constructs input type from each argument
- Should it be used with `RelayArg` decorator?

**`Input` Mixin**

- Add the `clientMutationId` field to the Input type

**`Payload` Mixin**

- Add the `clientMutationId` field to the Payload type
