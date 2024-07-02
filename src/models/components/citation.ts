/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { RecordT, RecordT$ } from "./record.js";
import * as z from "zod";

export type Citation = {
    number?: number | undefined;
    record: RecordT;
    hitUrl?: string | null | undefined;
};

/** @internal */
export namespace Citation$ {
    export const inboundSchema: z.ZodType<Citation, z.ZodTypeDef, unknown> = z
        .object({
            number: z.number().int().optional(),
            record: RecordT$.inboundSchema,
            hit_url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                hit_url: "hitUrl",
            });
        });

    export type Outbound = {
        number?: number | undefined;
        record: RecordT$.Outbound;
        hit_url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Citation> = z
        .object({
            number: z.number().int().optional(),
            record: RecordT$.outboundSchema,
            hitUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                hitUrl: "hit_url",
            });
        });
}
