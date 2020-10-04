## [4.0.2](https://github.com/rogerballard/nestjs-relay/compare/v4.0.1...v4.0.2) (2020-10-04)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([6f35ae2](https://github.com/rogerballard/nestjs-relay/commit/6f35ae2629ad4a0eb35cd40914a37156e2190a22))

## [4.0.1](https://github.com/rogerballard/nestjs-relay/compare/v4.0.0...v4.0.1) (2020-09-02)


### Bug Fixes

* upgrade multiple dependencies with Snyk ([9943d49](https://github.com/rogerballard/nestjs-relay/commit/9943d49ff930cdc7b4dc61e1278cd603ea19321f))

# [4.0.0](https://github.com/rogerballard/nestjs-relay/compare/v3.0.5...v4.0.0) (2020-09-02)


### Bug Fixes

* set page info fields to non nullable ([6aac951](https://github.com/rogerballard/nestjs-relay/commit/6aac95147fb95145cac934c46d72009b24147af1))


### Build System

* **development workflow:** add build step to deploy phase ([4737a6e](https://github.com/rogerballard/nestjs-relay/commit/4737a6e545a8c28d854489a4c9f484233e1c2e5d))


### Code Refactoring

* **global object identification:** remove GlobalIdField and NodeResolver from exports ([3ac890a](https://github.com/rogerballard/nestjs-relay/commit/3ac890ae407638903663cbd97c5b4b6c6b248c44))


### Features

* **connection:** expose backward and forward connection args ([77a63a8](https://github.com/rogerballard/nestjs-relay/commit/77a63a8cf1df68f7fac75fe90e034b3725af9365))


### BREAKING CHANGES

* **development workflow:** Package contains built contents
* **global object identification:** the GlobalIdField decorator and NodeResolver interface are no longer exported

## [3.0.5](https://github.com/rogerballard/nestjs-relay/compare/v3.0.4...v3.0.5) (2020-08-29)


### Bug Fixes

* upgrade graphql from 15.2.0 to 15.3.0 ([270033b](https://github.com/rogerballard/nestjs-relay/commit/270033b804f5979364e1b6bc991b5dee5ad6be5c))

## [3.0.4](https://github.com/rogerballard/nestjs-relay/compare/v3.0.3...v3.0.4) (2020-08-27)


### Bug Fixes

* upgrade graphql-tools from 6.0.13 to 6.0.14 ([e12492e](https://github.com/rogerballard/nestjs-relay/commit/e12492e0e2a1a17502b6a32b307f8c6b3c115f82))

## [3.0.3](https://github.com/rogerballard/nestjs-relay/compare/v3.0.2...v3.0.3) (2020-07-29)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([6539eec](https://github.com/rogerballard/nestjs-relay/commit/6539eecbf55bdc9082b24bbc56c29ddd740bc882))

## [3.0.2](https://github.com/rogerballard/nestjs-relay/compare/v3.0.1...v3.0.2) (2020-07-29)


### Bug Fixes

* upgrade graphql from 15.1.0 to 15.2.0 ([aea774d](https://github.com/rogerballard/nestjs-relay/commit/aea774d7c7f9e1f9c3cc4e7113f80c08aa09360b))

## [3.0.1](https://github.com/rogerballard/nestjs-relay/compare/v3.0.0...v3.0.1) (2020-07-05)


### Bug Fixes

* enable releases ([36633db](https://github.com/rogerballard/nestjs-relay/commit/36633db40269c6b041963a8d0e354df02dd40c3e))
* release mismatch ([945748a](https://github.com/rogerballard/nestjs-relay/commit/945748affa88806d00fc8da74bee79d8f9b9daac))

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.1.1...v3.0.0) (2020-07-05)


### Bug Fixes

* bump build ([fd940f9](https://github.com/rogerballard/nestjs-relay/commit/fd940f9786ae20ce5d72df92e43a38db5855a164))
* **pkg:** add description and keywords to pkg ([f5b8523](https://github.com/rogerballard/nestjs-relay/commit/f5b8523064fc64dd56884003e6d041b02beb07b2))


* Next (#67) ([dc4a9b0](https://github.com/rogerballard/nestjs-relay/commit/dc4a9b0cfa4079cfb7a9f5a2839ea3bf8c903d19)), closes [#67](https://github.com/rogerballard/nestjs-relay/issues/67) [#65](https://github.com/rogerballard/nestjs-relay/issues/65) [#68](https://github.com/rogerballard/nestjs-relay/issues/68)


### BREAKING CHANGES

* the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs: fix typo in refecting data guide

* chore(release): 3.0.0 [skip ci]

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.2.2...v3.0.0) (2020-07-05)

### Code Refactoring

* **global object identification:** remove GlobalIdField and NodeResolver from exports ([3ac890a](https://github.com/rogerballard/nestjs-relay/commit/3ac890ae407638903663cbd97c5b4b6c6b248c44))

### BREAKING CHANGES

* **global object identification:** the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs(mutations guide): add updated mutations guide

* docs: remove old mutations guide

* docs(connections guide): add connections guide

* docs(readme): add prerequisites and peer dependencies

* docs(readme): simplify features

Co-authored-by: Roger Ballard <roger@park-it-solutions.com>
Co-authored-by: semantic-release-bot <semantic-release-bot@martynus.net>

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.1.1...v3.0.0) (2020-07-05)


### Bug Fixes

* **pkg:** add description and keywords to pkg ([f5b8523](https://github.com/rogerballard/nestjs-relay/commit/f5b8523064fc64dd56884003e6d041b02beb07b2))


* Next (#67) ([dc4a9b0](https://github.com/rogerballard/nestjs-relay/commit/dc4a9b0cfa4079cfb7a9f5a2839ea3bf8c903d19)), closes [#67](https://github.com/rogerballard/nestjs-relay/issues/67) [#65](https://github.com/rogerballard/nestjs-relay/issues/65) [#68](https://github.com/rogerballard/nestjs-relay/issues/68)


### BREAKING CHANGES

* the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs: fix typo in refecting data guide

* chore(release): 3.0.0 [skip ci]

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.2.2...v3.0.0) (2020-07-05)

### Code Refactoring

* **global object identification:** remove GlobalIdField and NodeResolver from exports ([3ac890a](https://github.com/rogerballard/nestjs-relay/commit/3ac890ae407638903663cbd97c5b4b6c6b248c44))

### BREAKING CHANGES

* **global object identification:** the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs(mutations guide): add updated mutations guide

* docs: remove old mutations guide

* docs(connections guide): add connections guide

* docs(readme): add prerequisites and peer dependencies

* docs(readme): simplify features

Co-authored-by: Roger Ballard <roger@park-it-solutions.com>
Co-authored-by: semantic-release-bot <semantic-release-bot@martynus.net>

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.1.1...v3.0.0) (2020-07-05)


* Next (#67) ([dc4a9b0](https://github.com/rogerballard/nestjs-relay/commit/dc4a9b0cfa4079cfb7a9f5a2839ea3bf8c903d19)), closes [#67](https://github.com/rogerballard/nestjs-relay/issues/67) [#65](https://github.com/rogerballard/nestjs-relay/issues/65) [#68](https://github.com/rogerballard/nestjs-relay/issues/68)


### BREAKING CHANGES

* the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs: fix typo in refecting data guide

* chore(release): 3.0.0 [skip ci]

# [3.0.0](https://github.com/rogerballard/nestjs-relay/compare/v2.2.2...v3.0.0) (2020-07-05)

### Code Refactoring

* **global object identification:** remove GlobalIdField and NodeResolver from exports ([3ac890a](https://github.com/rogerballard/nestjs-relay/commit/3ac890ae407638903663cbd97c5b4b6c6b248c44))

### BREAKING CHANGES

* **global object identification:** the GlobalIdField decorator and NodeResolver interface are no longer exported

* docs(mutations guide): add updated mutations guide

* docs: remove old mutations guide

* docs(connections guide): add connections guide

* docs(readme): add prerequisites and peer dependencies

* docs(readme): simplify features

Co-authored-by: Roger Ballard <roger@park-it-solutions.com>
Co-authored-by: semantic-release-bot <semantic-release-bot@martynus.net>

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
