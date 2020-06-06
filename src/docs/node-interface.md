# Node Interface

## Usage

```typescript
import { Node, GlobalID } from 'nestjs-relay-tools'

@Object({ implements: [Node] })
export class Faction implements Node {
  @Field()
  id: GlobalID

  @Field()
  name: string
}
```
