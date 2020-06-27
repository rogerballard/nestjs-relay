# NestJS Relay

A batteries-included toolkit for building Relay-compliant GraphQL APIs with NestJS v7.

[![npm](https://img.shields.io/npm/v/nestjs-relay)](https://www.npmjs.com/package/nestjs-relay)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rogerballard/nestjs-relay/development)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/rogerballard/nestjs-relay)
[![Coveralls](https://img.shields.io/coveralls/github/rogerballard/nestjs-relay)](https://coveralls.io/github/rogerballard/nestjs-relay)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features
- `ID` scalar that automatically handles global id transformations
- The `Node` interface to implement in your schema types
- Resolvers for the `node` and `nodes` root fields
- Automatic `Input` and `Payload` type generation for mutations

### Coming Soon
- Connections *([see #31](https://github.com/rogerballard/nestjs-relay/issues/31))*

## Getting Started

### Installation

Install from NPM:
```bash
npm i nestjs-relay
```

Or from GitHub Release:
```bash
npm i github:rogerballard/nestjs-relay
```

### Guides

- [Global Object Identification](docs/global-object-identification.md)
- [Mutations](docs/mutations.md)
- Connections *(coming soon)*

### Documentation

- [Full API](https://rogerballard.github.io/nestjs-relay/)

## Contributing

Please see the [contribution guidelines](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md).
