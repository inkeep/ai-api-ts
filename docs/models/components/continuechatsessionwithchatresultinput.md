# ContinueChatSessionWithChatResultInput

## Example Usage

```typescript
import { ContinueChatSessionWithChatResultInput } from "@inkeep/ai-api/models/components";

let value: ContinueChatSessionWithChatResultInput = {
  integrationId: "<value>",
  message: {
    content: "<value>",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `integrationId`      | *string*             | :heavy_check_mark:   | N/A                  |
| `message`            | *components.Message* | :heavy_check_mark:   | N/A                  |
| `stream`             | *boolean*            | :heavy_minus_sign:   | N/A                  |