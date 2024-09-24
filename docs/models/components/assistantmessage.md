# AssistantMessage

## Example Usage

```typescript
import { AssistantMessage } from "@inkeep/ai-api/models/components";

let value: AssistantMessage = {
  content: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `role`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `content`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `recordsCited`                                                     | [components.RecordsCited](../../models/components/recordscited.md) | :heavy_minus_sign:                                                 | N/A                                                                |