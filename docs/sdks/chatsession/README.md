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
    },
  });
  
  if (result.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of result.chatResultStream) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAICore } from "@inkeep/ai-api/core.js";
import { chatSessionCreate } from "@inkeep/ai-api/funcs/chatSessionCreate.js";

// Use `InkeepAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAI = new InkeepAICore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatSessionCreate(inkeepAI, {
    integrationId: "<value>",
    chatSession: {
      messages: [
        {
          content: "<value>",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  if (result.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of result.chatResultStream) {
    // Handle the event
    console.log(event);
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
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateResponse](../../models/operations/createresponse.md)\>**

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
  const result = await inkeepAI.chatSession.continue("<value>", {
    integrationId: "<value>",
    message: {
      content: "<value>",
    },
  });
  
  if (result.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of result.chatResultStream) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAICore } from "@inkeep/ai-api/core.js";
import { chatSessionContinue } from "@inkeep/ai-api/funcs/chatSessionContinue.js";

// Use `InkeepAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAI = new InkeepAICore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatSessionContinue(inkeepAI, "<value>", {
    integrationId: "<value>",
    message: {
      content: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  if (result.chatResultStream == null) {
    throw new Error("failed to create stream: received null value");
  }
  
  for await (const event of result.chatResultStream) {
    // Handle the event
    console.log(event);
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
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ContinueResponse](../../models/operations/continueresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
