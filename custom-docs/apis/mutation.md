# Mutation

## `RelayMutation`

The `RelayMutation` method decorator abstracts the implementation detail required to adhere to the Relay Mutation specification.

### Behaviour
- Add the Input type to the schema
- Add the Payload type to the schema
- Add the mutation to the schema
- Hide the `clientMutationId` argument from the resolver

### Arguments

**`typeFunc`**
- Type: `ReturnTypeFunc`
- Required: yes

**`options`**
- Type: `RelayMutationOptions`
- Required: no
- Properties:
  - `name` optionally defines the mutation name
  - `description` adds the description to the schema
  - `deprecationReason` adds the deprecationReason to the schema

### Examples

**Example 1: Minimum**
```typescript
import { RelayMutation } from 'nestjs-relay'

@RelayMutation(() => IntroduceShipOutput)
introduceShip() {}
```

**Example 2: With Options**
```typescript
import { RelayMutation } from 'nestjs-relay'

@RelayMutation(() => IntroduceShipOutput, {
  name: 'introduceShip',
  description: 'Introduces a new ship to a faction',
  deprecationReason: 'Deprecated on 2020-01-01. Use `addShipToFaction`.'
})
introduceShip() {}
```

----

## `RelayArg`

The `RelayArg` decorator abstracts the implementation detail required to adhere to the Relay Mutation specification.

### Behaviour
- Add the `clientMutationId` field to the schema definition of the input type
- The name of the input type should be in pascal case (capitalised first character) and suffixed with `Input`

### Arguments

**`typeFunc`**
- Type: `ReturnTypeFunc`
- Required: yes

**`options`**
- Type: `RelayArgOptions`
- Required: no
- Properties:
  - `description` adds the description to the schema

### Examples

**Example 1: Minimum**
```typescript
import { RelayArg } from 'nestjs-relay'
import { IntroduceShipInput } from './models'

introduceShip(
  @RelayArg(() => IntroduceShipInput) input: IntroduceShipInput
) {
  // ...
}
```

**Example 2: With Options**
```typescript
import { RelayArg } from 'nestjs-relay'
import { IntroduceShipInput } from './models'

introduceShip(
  @RelayArg(() => IntroduceShipInput, { description: 'The input object' })
  input: IntroduceShipInput
) {
  // ...
}
```

## `RelayArgs`

The `RelayArg` decorator abstracts the implementation detail required to adhere to the Relay Mutation specification.

### Behaviour

- Construct an input type from all of the parameters decorated with `@RelayArgs` in this method
- Add the `clientMutationId` field to the schema definition of the input type
- The name of the input type should be in pascal case (capitalised first character) and suffixed with `Input`

### Arguments

**`typeFunc`**
- Type: `ReturnTypeFunc`
- Required: no

**`options`**
- Type: `RelayArgOptions`
- Required: no
- Properties:
  - `name` optionally defines the field name
  - `nullable` determines whether the field is nullable
  - `description` adds the description to the schema

### Examples

**Example 1: Minimum**
```typescript
import { RelayArgs } from 'nestjs-relay'

introduceShip(
  @RelayArgs() shipName: string,
  @RelayArgs() factionId: ResolvedGlobalId
) {
  // ...
}
```

**Example 2: With Options**
```typescript
import { String } from '@nestjs/graphql'
import { RelayArgs } from 'nestjs-relay'

introduceShip(
  @RelayArgs(() => String, {
    name: 'shipName',
    nullable: false,
    description: 'The name of the new ship'
  })
  shipName: string,
  @RelayArgs({
    name: 'factionId',
    nullable: false,
    description: 'The id of the faction to introduce the ship to'
  })
  factionId: ResolvedGlobalId
) {
  // ...
}
```

## Full Examples

**Example 1**

```typescript
import { RelayMutation, RelayArg } from 'nestjs-relay'

import { RelayMutation } from 'nestjs-relay'

@RelayMutation(() => IntroduceShipOutput, {
  name: 'introduceShip',
  description: 'Introduces a new ship to a faction',
  deprecationReason: 'Deprecated on 2020-01-01. Use `addShipToFaction`.'
})
introduceShip(
  @RelayArg(() => IntroduceShipInput)
  input: IntroduceShipInput
) {
  // ...
}
```

**Example 2**
```typescript
import { RelayMutation, RelayArg } from 'nestjs-relay'

@RelayMutation(() => IntroduceShipOutput, {
  name: 'introduceShip',
})
introduceShip(
  @RelayArgs({ name: 'shipName', nullable: false })
  shipName: string,
  @RelayArgs({ name: 'factionId', nullable: false })
  factionId: ResolvedGlobalId
) {
  // ...
}
```

**Schema**

Both examples above should result in the same schema snippet.
```graphql
type IntroduceShipPayload {
  ship: Ship
  faction: Faction
  clientMutationId: String
}

input IntroduceShipInput {
  shipName: String!
  factionId: ID!
  clientMutationId: String
}

type Mutation {
  introduceShip(input: IntroduceShipInput!): IntroduceShipPayload
}
```
