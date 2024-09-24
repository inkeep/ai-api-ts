# ContinueRequest

## Example Usage

```typescript
import { ContinueRequest } from "@inkeep/ai-api/models/operations";

let value: ContinueRequest = {
  chatSessionId: "<value>",
  continueChatSessionWithChatResultInput: {
    integrationId: "<value>",
    message: {
      content: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `chatSessionId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `continueChatSessionWithChatResultInput`                                                                               | [components.ContinueChatSessionWithChatResultInput](../../models/components/continuechatsessionwithchatresultinput.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |