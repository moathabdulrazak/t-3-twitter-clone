import { router } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../trpc";

export const tweetRouter = router({
  create: protectedProcedure.input(
    z.object({
      text: z.string({
        required_error: 'tweet text is required'
      })
    })
  ).mutation(({ ctx, input }) => {
    const { prisma, session } = ctx;
    const { text } = input;
    const userId = session.user.id;

    return prisma.tweet.create({
      data: {
        text,
        author: {
          connect: {
            id: userId,
          },
        }
      }
    }).then(tweet => ({tweet}));
  })
});
