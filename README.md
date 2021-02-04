# NestJS Relay

A batteries-included toolkit for building Relay-compliant GraphQL APIs with NestJS v7.

[![npm](https://img.shields.io/npm/v/nestjs-relay)](https://www.npmjs.com/package/nestjs-relay)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rogerballard/nestjs-relay/development)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/rogerballard/nestjs-relay)
[![Coveralls](https://img.shields.io/coveralls/github/rogerballard/nestjs-relay)](https://coveralls.io/github/rogerballard/nestjs-relay)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Background

[Relay](https://relay.dev/) is a Javascript client for GraphQL that is designed for performance and large-scale applications.

Relay provides powerful abstractions for building client applications, however, in order to understand the structure of an application's data, Relay requires that you follow certain conventions when defining your schema.

The three core assumptions that Relay makes about a GraphQL server are that it provides:

- A mechanism for refetching an object.
- A description of how to page through connections.
- Structure around mutations to make them predictable.

## Features
- Build a Relay-compliant GraphQL API without the hassle!

## Getting Started

### Prerequisites

- NestJS GraphQL v7
- Code-first methodology

### Installation

```bash
# NPM
npm i --save nestjs-relay

# GitHub Release
npm i --save github:rogerballard/nestjs-relay
```

Peer dependencies:

```bash
npm i --save graphql-relay graphql
```

### Guides

- [Refetching Data](docs/refetching-data.md)
- [Mutations](docs/mutations.md)
- [Connections](docs/connections.md)

## Further Reading

For further detail, please see the following resources.

**Walkthroughs**
- [Relay's GraphQL Server Specification](https://relay.dev/docs/en/graphql-server-specification)
- [Global Object Identification](https://graphql.org/learn/global-object-identification/)

**Specifications**
- [GraphQL Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm)
- [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)

## Contributing

Please see the [contribution guidelines](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md).
