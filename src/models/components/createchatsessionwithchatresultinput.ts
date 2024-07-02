/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ChatSessionInput, ChatSessionInput$ } from "./chatsessioninput.js";
import * as z from "zod";

export enum ChatModeOptions {
    Turbo = "turbo",
    Auto = "auto",
}

export type ChatMode = ChatModeOptions | string;

export type CreateChatSessionWithChatResultInput = {
    integrationId: string;
    chatSession: ChatSessionInput;
    chatMode?: ChatModeOptions | string | undefined;
    stream?: boolean | undefined;
};

/** @internal */
export namespace ChatModeOptions$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ChatModeOptions> =
        z.nativeEnum(ChatModeOptions);
    export const outboundSchema: z.ZodNativeEnum<typeof ChatModeOptions> = inboundSchema;
}

/** @internal */
export namespace ChatMode$ {
    export const inboundSchema: z.ZodType<ChatMode, z.ZodTypeDef, unknown> = z.union([
        ChatModeOptions$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = string | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatMode> = z.union([
        ChatModeOptions$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace CreateChatSessionWithChatResultInput$ {
    export const inboundSchema: z.ZodType<
        CreateChatSessionWithChatResultInput,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            integration_id: z.string(),
            chat_session: ChatSessionInput$.inboundSchema,
            chat_mode: z.union([ChatModeOptions$.inboundSchema, z.string()]).optional(),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return remap$(v, {
                integration_id: "integrationId",
                chat_session: "chatSession",
                chat_mode: "chatMode",
            });
        });

    export type Outbound = {
        integration_id: string;
        chat_session: ChatSessionInput$.Outbound;
        chat_mode?: string | string | undefined;
        stream: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateChatSessionWithChatResultInput
    > = z
        .object({
            integrationId: z.string(),
            chatSession: ChatSessionInput$.outboundSchema,
            chatMode: z.union([ChatModeOptions$.outboundSchema, z.string()]).optional(),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return remap$(v, {
                integrationId: "integration_id",
                chatSession: "chat_session",
                chatMode: "chat_mode",
            });
        });
}
