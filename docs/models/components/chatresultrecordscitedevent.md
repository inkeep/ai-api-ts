# ChatResultRecordsCitedEvent

A server-sent event with information about the records cited in the message.

## Example Usage

```typescript
import { ChatResultRecordsCitedEvent } from "@inkeep/ai-api/models/components";

let value: ChatResultRecordsCitedEvent = {
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

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `event`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.RecordsCited](../../models/components/recordscited.md) | :heavy_check_mark:                                                 | N/A                                                                |