/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ChatResultMessageChunkEvent,
    ChatResultMessageChunkEvent$,
} from "./chatresultmessagechunkevent";
import {
    ChatResultRecordsCitedEvent,
    ChatResultRecordsCitedEvent$,
} from "./chatresultrecordscitedevent";
import { z } from "zod";

export type ChatResultStreamEvent =
    | (ChatResultMessageChunkEvent & { event: "message_chunk" })
    | (ChatResultRecordsCitedEvent & { event: "records_cited" });

/** @internal */
export namespace ChatResultStreamEvent$ {
    export type Inbound =
        | (ChatResultMessageChunkEvent$.Inbound & { event: "message_chunk" })
        | (ChatResultRecordsCitedEvent$.Inbound & { event: "records_cited" });

    export type Outbound =
        | (ChatResultMessageChunkEvent$.Outbound & { event: "message_chunk" })
        | (ChatResultRecordsCitedEvent$.Outbound & { event: "records_cited" });

    export const inboundSchema: z.ZodType<ChatResultStreamEvent, z.ZodTypeDef, Inbound> = z.union([
        ChatResultMessageChunkEvent$.inboundSchema.and(
            z.object({ event: z.literal("message_chunk") })
        ),
        ChatResultRecordsCitedEvent$.inboundSchema.and(
            z.object({ event: z.literal("records_cited") })
        ),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatResultStreamEvent> = z.union(
        [
            ChatResultMessageChunkEvent$.outboundSchema.and(
                z.object({ event: z.literal("message_chunk") })
            ),
            ChatResultRecordsCitedEvent$.outboundSchema.and(
                z.object({ event: z.literal("records_cited") })
            ),
        ]
    );
}
