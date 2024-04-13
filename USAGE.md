<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->