# ChatResultMessageChunkEvent

A server-sent event containing a chunk of the message.

## Example Usage

```typescript
import { ChatResultMessageChunkEvent } from "@inkeep/ai-api/models/components";

let value: ChatResultMessageChunkEvent = {
  data: {
    contentChunk: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `event`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.MessageChunk](../../models/components/messagechunk.md) | :heavy_check_mark:                                                 | N/A                                                                |