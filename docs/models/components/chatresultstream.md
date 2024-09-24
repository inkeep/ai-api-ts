# ChatResultStream

## Example Usage

```typescript
import { ChatResultStream } from "@inkeep/ai-api/models/components";

let value: ChatResultStream = {
  data: {
    citations: [
      {
        record: {
          type: "<value>",
        },
      },
    ],
  },
};
```

## Supported Types

### `components.ChatResultMessageChunkEvent`

```typescript
const value: components.ChatResultMessageChunkEvent = /* values here */
```

### `components.ChatResultRecordsCitedEvent`

```typescript
const value: components.ChatResultRecordsCitedEvent = /* values here */
```

