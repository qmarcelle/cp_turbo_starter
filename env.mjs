
import { createEnv } from "@t3-oss/env-nextjs/dist/index.js";
import { z } from "zod";

export const env = createEnv({
  skipValidation: process.env.NODE_ENV === 'development',
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
});
