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

  create: privateProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.userId;

    const shop = await ctx.prisma.shop.create({
      data: {
        userId: userId,
      },
    });

    return shop.id;
  }),
});

// hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
