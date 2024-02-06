# ChatSession
(*chatSession*)

## Overview

Create and manage chat sessions for users. Chat history and continuation of chat is automatically done.

### Available Operations

* [create](#create) - Create Chat Session and receive a Chat Result
* [continue](#continue) - Continue Chat Session and receive a Chat Result

## create

Create Chat Session and receive a Chat Result

### Example Usage

```typescript
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
  const sdk = new InkeepClient({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.chatSession.create({
    integrationId: "string",
    chatSession: {
      messages: [
        ,
      ],
    },
  });

  if (res.chatResult == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of res.chatResult) {
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

Continue Chat Session and receive a Chat Result

### Example Usage

```typescript
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
  const sdk = new InkeepClient({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const chatSessionId = "string";
  const continueChatSessionWithChatResultInput = {
    integrationId: "string",
  };
  
  const result = await sdk.chatSession.continue(chatSessionId, continueChatSessionWithChatResultInput);

  if (res.chatResult == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of res.chatResult) {
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
