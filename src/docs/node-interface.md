# Node Interface

## Usage

**Import the IDScalar provider into a module**
```typescript
import { Module } from '@nestjs/common'

@Module({
  providers: [IDScalar]
})
export class AppModule {}
```

**Set a field to have type `GlobalID`**
```typescript
import { ObjectType, Field} from '@nestjs/graphql'
import { GlobalID } from 'nestjs-relay-tools'

@ObjectType()
export class Faction {
  @Field()
  id: GlobalID
}
```
