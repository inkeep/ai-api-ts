<div align="center">
    <img src="https://github.com/inkeep/ai-api-ts/assets/108416695/94986354-0863-4141-9d02-8cde193a7168" width="200">
    <h1>Inkeep Chat API TS SDK</h1>
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Inkeep Search and Chat API: Leverage the Inkeep APIs to create your own AI-powered search and chat experiences built on top of your own content.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Server-sent event streaming](#server-sent-event-streaming)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @inkeep/ai-api
```

### PNPM

```bash
pnpm add @inkeep/ai-api
```

### Bun

```bash
bun add @inkeep/ai-api
```

### Yarn

```bash
yarn add @inkeep/ai-api zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [chatSession](docs/sdks/chatsession/README.md)

* [create](docs/sdks/chatsession/README.md#create) - Create Chat Session
* [continue](docs/sdks/chatsession/README.md#continue) - Continue Chat Session


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [chatSessionContinue](docs/sdks/chatsession/README.md#continue)
- [chatSessionCreate](docs/sdks/chatsession/README.md#create)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

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

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
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

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { InkeepAI } from "@inkeep/ai-api";

const inkeepAI = new InkeepAI({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { InkeepAI } from "@inkeep/ai-api";
import {
  HTTPValidationError,
  SDKValidationError,
} from "@inkeep/ai-api/models/errors";

const inkeepAI = new InkeepAI({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await inkeepAI.chatSession.create({
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
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof HTTPValidationError): {
        // Handle err.data$: HTTPValidationErrorData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.inkeep.com` | None |

```typescript
import { InkeepAI } from "@inkeep/ai-api";

const inkeepAI = new InkeepAI({
  serverIdx: 0,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { InkeepAI } from "@inkeep/ai-api";

const inkeepAI = new InkeepAI({
  serverURL: "https://api.inkeep.com",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { InkeepAI } from "@inkeep/ai-api";
import { HTTPClient } from "@inkeep/ai-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new InkeepAI({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `apiKey`    | http        | HTTP Bearer |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { InkeepAI } from "@inkeep/ai-api";

const sdk = new InkeepAI({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
