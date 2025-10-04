import "dotenv/config";

import { z } from "zod"
import Tags from "./Tags.js"

const envSchema = z.object({
    NODE_ENV: z.enum(["PROD", "DEV"]).optional(),
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