# ContinueResponse

## Example Usage

```typescript
import { ContinueResponse } from "@inkeep/ai-api/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `chatResult`                                                          | [components.ChatResult](../../models/components/chatresult.md)        | :heavy_minus_sign:                                                    | Successful Response                                                   |
| `chatResultStream`                                                    | *EventStream<components.ChatResultStream>*                            | :heavy_minus_sign:                                                    | Successful Response                                                   |