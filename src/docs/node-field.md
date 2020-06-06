# Node Field

## Usage

```typescript
import { Resolver } from '@nestjs/graphql'
import { NodeField, Node } from 'nestjs-relay-tools'

const resolveFunc = () => {}

@Resolver(Node)
export class NodeFieldResolver extends NodeField(resolveFunc) {}
```
