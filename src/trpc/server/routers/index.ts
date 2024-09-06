import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '..'

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    // using zod schema to validate and infer input values
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish(),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input?.text ?? 'world'}`,
      };
    }),
})

export type AppRouter = typeof appRouter
