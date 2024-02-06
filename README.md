<div align="center">
    <img src="https://storage.googleapis.com/organization-image-assets/inkeep-botAvatarSrcUrl-1705425055419.png" width="200">
    <h1>Inkeep Chat API TS SDK</h1>
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @inkeep/chat-api
```

### Yarn

```bash
yarn add @inkeep/chat-api
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
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
    const sdk = new InkeepClient({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.chatSession.create({
        integrationId: "string",
        chatSession: {
            messages: [,],
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [chatSession](docs/sdks/chatsession/README.md)

* [create](docs/sdks/chatsession/README.md#create) - Create Chat Session and receive a Chat Result
* [continue](docs/sdks/chatsession/README.md#continue) - Continue Chat Session and receive a Chat Result
<!-- End Available Resources and Operations [operations] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
    const sdk = new InkeepClient({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.chatSession.create({
        integrationId: "string",
        chatSession: {
            messages: [,],
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

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Example

```typescript
import { InkeepClient } from "@inkeep/chat-api";
import * as errors from "@inkeep/chat-api/models/errors";

async function run() {
    const sdk = new InkeepClient({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.chatSession.create({
            integrationId: "string",
            chatSession: {
                messages: [,],
            },
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.HTTPValidationError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    if (res.chatResult == null) {
        throw new Error("failed to create stream: received null value");
    }

    for await (const event of res.chatResult) {
        // Handle the event
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
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
    const sdk = new InkeepClient({
        serverIdx: 0,
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.chatSession.create({
        integrationId: "string",
        chatSession: {
            messages: [,],
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
    const sdk = new InkeepClient({
        serverURL: "https://api.inkeep.com",
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.chatSession.create({
        integrationId: "string",
        chatSession: {
            messages: [,],
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
import { InkeepClient } from "@inkeep/chat-api";
import { HTTPClient } from "@inkeep/chat-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
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

const sdk = new InkeepClient({ httpClient });
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
import { InkeepClient } from "@inkeep/chat-api";

async function run() {
    const sdk = new InkeepClient({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.chatSession.create({
        integrationId: "string",
        chatSession: {
            messages: [,],
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
<!-- End Authentication [security] -->

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
