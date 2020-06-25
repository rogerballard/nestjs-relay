# Contributing to NestJS Relay

## Found a Bug?

If you find a bug in this project, you can help by [submitting an issue](#submitting-an-issue) to the GitHub repository. Even better, you can [submit a pull request](#submitting-a-pull-request) with a fix.

## Missing a Feature?

You can *request* a new feature by submitting an issue to the GitHub repository. If you would like to implement a new feature, please submit an issue with a proposal for your work *first*, so that we can be sure that we can use it.

When requesting a feature, please consider the scope of the feature:

- For **major features**, first submit an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate efforts, prevent duplication of work, and help you to build the change in a way that it can be successfully accepted into the project. For your issue name, please prefix your proposal with `[discussion]`, for example `'[discussion]: your feature idea'`.
- **Small features** can be crafted and directly submitted as a pull request.

## Submission Guidelines

### Submitting an Issue

### Submitting a Pull Request

## Commit Message Rules

This project has very precise rules on how our git commit messages can be formatted. These rules lead to more readable messages that are easy to follow when looking through the project history. The consistent message format allows us to generate the [changelog](CHANGELOG.md) and automatically handle releases.

This project uses the [Commitizen CLI](http://commitizen.github.io/cz-cli/) to help maintainers and contributors to follow the commit message rules with a useful command-line prompt. If you do not have the Commitizen CLI installed, you can use the handy `commit` script to ensure that your commit message is acceptable.

Please familiarise yourself with the format below.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

The **footer** should contain a closing reference to an issue if any.

#### Samples

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
