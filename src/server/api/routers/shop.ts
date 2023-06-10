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
    .input(
      z.object({
        id: z.string(),
        lat: z.number(),
        lng: z.number(),
        buildingNumber: z.string().min(1),
        buildingName: z.string(),
        addressLine1: z.string().min(1),
        addressLine2: z.string(),
        addressTown: z.string().min(1),
        addressCity: z.string().min(1),
        addressState: z.string().min(1),
        addressPostalCode: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updateShop = await ctx.prisma.shop.update({
        where: {
          id: input.id,
        },
        data: {
          latitude: input.lat,
          longitude: input.lng,
          buildingNumber: input.buildingNumber,
          buildingName: input.buildingName,
          addressLine1: input.addressLine1,
          addressLine2: input.addressLine2,
          addressTown: input.addressTown,
          addressCity: input.addressCity,
          addressState: input.addressState,
          addressPostalCode: input.addressPostalCode,
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
