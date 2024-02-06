/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum FinishReason {
    Stop = "stop",
    Length = "length",
    ContentFilter = "content_filter",
}

export type MessageChunk = {
    chatSessionId?: string | undefined;
    contentChunk: string;
    finishReason?: FinishReason | undefined;
};

/** @internal */
export const FinishReason$ = z.nativeEnum(FinishReason);

/** @internal */
export namespace MessageChunk$ {
    export type Inbound = {
        chat_session_id?: string | undefined;
        content_chunk: string;
        finish_reason?: FinishReason | undefined;
    };

    export const inboundSchema: z.ZodType<MessageChunk, z.ZodTypeDef, Inbound> = z
        .object({
            chat_session_id: z.string().optional(),
            content_chunk: z.string(),
            finish_reason: FinishReason$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.chat_session_id === undefined ? null : { chatSessionId: v.chat_session_id }),
                contentChunk: v.content_chunk,
                ...(v.finish_reason === undefined ? null : { finishReason: v.finish_reason }),
            };
        });

    export type Outbound = {
        chat_session_id?: string | undefined;
        content_chunk: string;
        finish_reason?: FinishReason | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MessageChunk> = z
        .object({
            chatSessionId: z.string().optional(),
            contentChunk: z.string(),
            finishReason: FinishReason$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.chatSessionId === undefined ? null : { chat_session_id: v.chatSessionId }),
                content_chunk: v.contentChunk,
                ...(v.finishReason === undefined ? null : { finish_reason: v.finishReason }),
            };
        });
}
