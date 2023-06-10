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

  updateType: privateProcedure
    .input(z.object({ type: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const updateShop = await ctx.prisma.shop.update({
        where: {
          userId: userId,
        },
        data: {
          type: input.type,
        },
      });

      return updateShop;
    }),

  updateLocation: privateProcedure
    .input(z.object({ lat: z.number(), lng: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const updateShop = await ctx.prisma.shop.update({
        where: {
          userId: userId,
        },
        data: {
          latitude: input.lat,
          longitude: input.lng,
        },
      });

      return updateShop;
    }),
});

// hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
