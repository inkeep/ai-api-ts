# RecordT

## Example Usage

```typescript
import { RecordT, RecordTypeEnumerated } from "@inkeep/ai-api/models/components";

let value: RecordT = {
  type: RecordTypeEnumerated.DiscordMessage,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `type`                  | *components.RecordType* | :heavy_check_mark:      | The type of record      |
| `url`                   | *string*                | :heavy_minus_sign:      | N/A                     |
| `title`                 | *string*                | :heavy_minus_sign:      | N/A                     |
| `description`           | *string*                | :heavy_minus_sign:      | N/A                     |
| `breadcrumbs`           | *string*[]              | :heavy_minus_sign:      | N/A                     |