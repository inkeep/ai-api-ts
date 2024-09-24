# RecordsCited

## Example Usage

```typescript
import { RecordsCited, RecordTypeEnumerated } from "@inkeep/ai-api/models/components";

let value: RecordsCited = {
  citations: [
    {
      record: {
        type: RecordTypeEnumerated.CustomQuestionAnswer,
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `citations`                                                  | [components.Citation](../../models/components/citation.md)[] | :heavy_check_mark:                                           | N/A                                                          |