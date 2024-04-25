# ChatSession
(*chatSession*)

## Overview

Create and manage chat sessions for users. Chat history and continuation of chat is automatically done.

### Available Operations

* [create](#create) - Create Chat Session
* [continue](#continue) - Continue Chat Session

## create

Create Chat Session

### Example Usage

```typescript
import { InkeepAI } from "@inkeep/ai-api";
import { ChatModeOptions } from "@inkeep/ai-api/models/components";

const inkeepAI = new InkeepAI({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await inkeepAI.chatSession.create({
    integrationId: "<value>",
    chatSession: {
      messages: [
          {
            content: "<value>",
          },
      ],
      tags: [
        "<value>",
      ],
    },
  chatMode: ChatModeOptions.Auto,
  });

  if (res.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of res.chatResultStream) {
    // Handle the event
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateChatSessionWithChatResultInput](../../models/components/createchatsessionwithchatresultinput.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateResponse](../../models/operations/createresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## continue

Continue Chat Session

### Example Usage

```typescript
import { InkeepAI } from "@inkeep/ai-api";

const inkeepAI = new InkeepAI({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const chatSessionId = "<value>";
  const continueChatSessionWithChatResultInput = {
    integrationId: "<value>",
  message:     {
        content: "<value>",
        recordsCited: {
          citations: [
            {
              record: {
              type: "<value>",
                breadcrumbs: [
                  "<value>",
                ],
              },
            },
          ],
        },
      },
  };
  
  const result = await inkeepAI.chatSession.continue(chatSessionId, continueChatSessionWithChatResultInput);

  if (res.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of res.chatResultStream) {
    // Handle the event
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatSessionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `continueChatSessionWithChatResultInput`                                                                                                                                       | [components.ContinueChatSessionWithChatResultInput](../../models/components/continuechatsessionwithchatresultinput.md)                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ContinueResponse](../../models/operations/continueresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
