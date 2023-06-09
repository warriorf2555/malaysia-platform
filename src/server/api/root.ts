import { createTRPCRouter } from "~/server/api/trpc";
import { shopRouter } from "./routers/shop";
import { accountRouter } from "./routers/account";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  shop: shopRouter,
  account: accountRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
