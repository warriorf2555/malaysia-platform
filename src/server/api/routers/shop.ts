import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const shopRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.shop.findMany();
  }),

  create: privateProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const shop = await ctx.prisma.shop.create({
        data: {
          userId: userId,
          title: input.title,
        },
      });

      return shop;
    }),
});

// hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
