<!-- Start SDK Example Usage [usage] -->
```typescript
import { InkeepClient } from "@inkeep/chat-api";
import { ChatMode } from "@inkeep/chat-api/models/components";

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