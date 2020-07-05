# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.2.2...v3.0.0) (2020-07-05)


### Code Refactoring

* **global object identification:** remove GlobalIdField and NodeResolver from exports ([3ac890a](https://github.com/rogerballard/nestjs-relay/commit/3ac890ae407638903663cbd97c5b4b6c6b248c44))


### BREAKING CHANGES

* **global object identification:** the GlobalIdField decorator and NodeResolver interface are no longer exported

## [2.2.2](https://github.com/rogerballard/nestjs-relay/compare/v2.2.1...v2.2.2) (2020-07-05)


### Bug Fixes

* upgrade graphql from 15.0.0 to 15.1.0 ([#68](https://github.com/rogerballard/nestjs-relay/issues/68)) ([b36d4c8](https://github.com/rogerballard/nestjs-relay/commit/b36d4c81c11333738d3d153f6a9d8d88e6c1cf98))

## [2.2.1](https://github.com/rogerballard/nestjs-relay/compare/v2.2.0...v2.2.1) (2020-07-03)


### Bug Fixes

* set page info fields to non nullable ([6aac951](https://github.com/rogerballard/nestjs-relay/commit/6aac95147fb95145cac934c46d72009b24147af1))

# [2.2.0](https://github.com/rogerballard/nestjs-relay/compare/v2.1.0...v2.2.0) (2020-06-28)


### Features

* **connection:** expose backward and forward connection args ([77a63a8](https://github.com/rogerballard/nestjs-relay/commit/77a63a8cf1df68f7fac75fe90e034b3725af9365))

## [2.1.1](https://github.com/rogerballard/nestjs-relay/compare/v2.1.0...v2.1.1) (2020-07-03)


### Bug Fixes

* upgrade graphql from 15.0.0 to 15.1.0 ([#68](https://github.com/rogerballard/nestjs-relay/issues/68)) ([b36d4c8](https://github.com/rogerballard/nestjs-relay/commit/b36d4c81c11333738d3d153f6a9d8d88e6c1cf98))

# [2.1.0](https://github.com/rogerballard/nestjs-relay/compare/v2.0.0...v2.1.0) (2020-06-24)


### Features

* **global id field resolver:** add optional id field options argument ([#55](https://github.com/rogerballard/nestjs-relay/issues/55)) ([0da626f](https://github.com/rogerballard/nestjs-relay/commit/0da626f776f8fb1d2fb0316bbbce902fd73bd19b))

# [2.0.0](https://github.com/rogerballard/nestjs-relay/compare/v1.1.0...v2.0.0) (2020-06-21)


### Code Refactoring

* **relay arg decorator:** rename relay arg to input arg ([916525b](https://github.com/rogerballard/nestjs-relay/commit/916525bb492f9d757c8294e05c723e71a362fe57))


### BREAKING CHANGES

* **relay arg decorator:** the RelayArg decorator is now named InputArg

# [1.1.0](https://github.com/rogerballard/nestjs-relay/compare/v1.0.2...v1.1.0) (2020-06-21)


### Features

* **snyk:** add snyk scripts ([85dd706](https://github.com/rogerballard/nestjs-relay/commit/85dd7069505c76dac2e7a5d63d29fd93d57c06b6))

## [1.0.2](https://github.com/rogerballard/nestjs-relay/compare/v1.0.1...v1.0.2) (2020-06-21)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([#41](https://github.com/rogerballard/nestjs-relay/issues/41)) ([f33419e](https://github.com/rogerballard/nestjs-relay/commit/f33419e3d8515a97dabdf038f8c6ec41455b7b7b))

## [1.0.1](https://github.com/rogerballard/nestjs-relay/compare/v1.0.0...v1.0.1) (2020-06-21)


### Bug Fixes

* **build:** export correct cjs and esm module files ([9f5f760](https://github.com/rogerballard/nestjs-relay/commit/9f5f7608708c39a839c2591b05cf0b5b13ff3e0c))
