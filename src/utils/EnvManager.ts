import "dotenv/config";

import { z } from "zod"
import Tags from "./Tags.js"

const envSchema = z.object({
    NODE_ENV: z.enum(["PROD", "DEV"]).optional(),
    AMIKOM_NIM: z.string().optional(),
    AMIKOM_PASSWORD: z.string().optional(),
    CAPMONSTER_TOKEN: z.string().optional(),
    SERVER_IP: z.string().optional(),
    SERVER_PORT: z.string().optional(),
    POLLING_INTERVAL: z.string().optional(),
    CACHE_TTL: z.string().optional()
})

const envParsed = envSchema.safeParse(process.env)

if (envParsed.error || Object.keys(envParsed?.data ?? {}).length == 0) {
    console.log(`[${Tags.Error}] Invalid Env Variable.`)
    console.log(envParsed.error)
    throw new Error(`.env not satisfied`)
}

if (envParsed.success) {
    console.log(`[${Tags.System}] Env check success.`)
}

export const env = envParsed.data as z.infer<typeof envSchema>;