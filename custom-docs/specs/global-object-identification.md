# GraphQL Global Object Identification Specification

[Source](https://relay.dev/graphql/objectidentification.htm#)

## Reserved Types

```
A GraphQL server compatible with this spec must reserve certain types and type names to support the consistent object identification model. In particular, this spec creates guidelines for the following types:
- An interface named Node.
- The node field on the root query type.
```

- [ ] Node Interface
  - [ ] Must be defined in the schema
  - [ ] Must be an interface
- [ ] Node field on the root query type
  - [ ] Must be defined in the schema

## Node Interface

```
The server must provide an interface called Node. That interface must include exactly one field, called id that returns a non‐null ID.

This id should be a globally unique identifier for this object, and given just this id, the server should be able to refetch the object.
```

- [ ] Node Interface
  - [ ] Must have exactly one field
  - [ ] Field must be named 'id'
  - [ ] Field must be a non-null `ID`
- [ ] Global Identifier
  - [ ] Must be a unique identifier for this object

## Node Root Field

```
The server must provide a root field called node that returns the Node interface. This root field must take exactly one argument, a non‐null ID named id.

If a query returns an object that implements Node, then this root field should refetch the identical object when value returned by the server in the Node‘s id field is passed as the id parameter to the node root field.

The server must make a best effort to fetch this data, but it may not always be possible; for example, the server may return a User with a valid id, but when the request is made to refetch that user with the node root field, the user’s database may be unavailable, or the user may have deleted their account. In this case, the result of querying this field should be null.
```

- [ ] Node Root Field
  - [ ] Must return the Node interface
  - [ ] Must take exactly one argument
  - [ ] Argument must be named 'id'
  - [ ] Argument must be a non-null `ID`
  - [ ] Should refetch the same object
  - [ ] Return must be nullable

## Field Stability

## Plurial Identifying Root Fields
