<!-- Start SDK Example Usage [usage] -->
```typescript
import { InkeepAI } from "@inkeep/ai-api";

async function run() {
    const sdk = new InkeepAI({
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