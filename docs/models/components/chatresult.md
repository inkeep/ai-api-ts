# ChatResult

## Example Usage

```typescript
import { ChatResult } from "@inkeep/ai-api/models/components";

let value: ChatResult = {
  chatSessionId: "<value>",
  message: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `chatSessionId`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `message`                                                                  | [components.AssistantMessage](../../models/components/assistantmessage.md) | :heavy_check_mark:                                                         | N/A                                                                        |