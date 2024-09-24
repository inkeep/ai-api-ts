<!-- Start SDK Example Usage [usage] -->
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