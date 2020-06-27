# Contributing

:tada: :raised_hands: First off, thanks for taking the time to contribute! :raised_hands: :tada:

The following is a set of guidelines for contributing to NestJS Relay.

**Contents**
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Reporting Bugs](#reporting-bugs)
  - [Requesting Enhancements](#requesting-enhancements)
  - [Submission Guidelines](#submission-guidelines)
    - [Submitting an Issue](#submitting-an-issue)
    - [Submitting a Pull Request](#submitting-a-pull-request)
  - [Commit Message Rules](#commit-message-rules)
    - [Commit Message Format](#commit-message-format)
      - [Examples](#examples)
      - [Type](#type)
      - [Subject](#subject)
      - [Body](#body)
      - [Revert](#revert)
      - [Footer](#footer)

## Code of Conduct

This project and everyone participating it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behaviour to [hello@rogerballard.dev](mailto:hello@rogerballard.dev).

## Reporting Bugs

If you find a bug in this project, you can help by [submitting an issue](#submitting-an-issue) to the GitHub repository. Even better, you can [submit a pull request](#submitting-a-pull-request) with a fix.

## Requesting Enhancements

You can *request* a new feature by submitting an issue to the GitHub repository. If you would like to implement a new feature, please submit an issue with a proposal for your work *first*, so that we can be sure that we can use it.

When requesting a feature, please consider the scope of the feature:

- For **major features**, first submit an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate efforts, prevent duplication of work, and help you to build the change in a way that it can be successfully accepted into the project. For your issue name, please prefix your proposal with `[discussion]`, for example `'[discussion]: your feature idea'`.
- **Small features** can be crafted and directly submitted as a pull request.

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the [issue tracker](https://github.com/rogerballard/nestjs-relay/issues) for whether your problem or suggestion already exists, and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically ask you to provide a minimal preproduction scenario using a repository, Gist, or codesandbox. Having a live, reproducible scenario gives us a wealth of important information without going back and forth with you.

Unfortunately, we are not able to investigate/fix bugs without a minimap reproduction, so if we don't hear back from you, your issue will eventually be closed.

You can submit an issue using one of the following templates:
- [Bug report](https://github.com/rogerballard/nestjs-relay/issues/new?assignees=&labels=&template=bug_report.md&title=)
- [Feature request](https://github.com/rogerballard/nestjs-relay/issues/new?assignees=&labels=&template=feature_request.md&title=)

### Submitting a Pull Request

Before you submit a pull request (PR), please search the [open and closed PRs](https://github.com/rogerballard/nestjs-relay/pulls?q=is%3Apr) that relate to your submission. This will help you to avoid duplicating effort which may be better applied to contributing to an ongoing pull request.

1. [Fork the repository](https://github.com/rogerballard/nestjs-relay/fork)
2. Create your patch, including appropriate test cases.
3. Commit your changes following the [commit message rules](#commit-message-rules).
4. Run the test suite by running the `test` script.
5. Push your branch to GitHub.
6. In GitHub, submit a pull request to the `master` branch.
7. Add a helpful description and link to a related issue (if applicable).

## Commit Message Rules

This project has very precise rules on how our git commit messages can be formatted. These rules lead to more readable messages that are easy to follow when looking through the project history. The consistent message format allows us to generate the [changelog](CHANGELOG.md) and automatically handle releases.

This project uses the [Commitizen CLI](http://commitizen.github.io/cz-cli/) to help maintainers and contributors to follow the commit message rules with a useful command-line prompt. The repository is configured to start the Commitizen prompt whenever the git `prepare-commit-msg` hook is triggered, such as from running `git commit` in your terminal.

Please familiarise yourself with the format below.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The **header** has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

The **footer** should contain a closing reference to an issue if any.

#### Examples

```
feat(global id field resolver): add optional id field options argument

accept an optional idFieldOptions argument that gets passed to the id field. allows the id field
complexity to be set
```
```
docs(global object id guide): add section on optional global id field complexity
```

More samples are available in the [commit history](https://github.com/rogerballard/nestjs-relay/commits/master).

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feature**: A new feature
- **bugfix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

#### Subject

The **subject** contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The **body** should include the motivation for the change and contrast this with previous behavior.

#### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the **header** of the reverted commit. In the **body** it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Footer
The **footer** should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
