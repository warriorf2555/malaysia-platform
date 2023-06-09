import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  privateProcedure,
} from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.account.findMany();
  }),

  create: privateProcedure.mutation(async ({ ctx }) => {
    const newAccount = await ctx.prisma.account.create({
      data: {
        // Get userID from clerk
        userId: ctx.userId,
      },
    });

    return newAccount;
  }),

  getAccountByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.account.findMany({
        where: {
          userId: input.userId,
        },
      })
    ),
});

// hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
