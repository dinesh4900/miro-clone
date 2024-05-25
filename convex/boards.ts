import { v } from 'convex/values';
import { query } from './_generated/server';
import { getAllOrThrow } from 'convex-helpers/server/relationships';

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favourites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error('Umauthorized');

    // todo - favorite list

    // if (args.favourites) {
    //   const favouriteBoards = await ctx.db
    //     .query('userFavourites')
    //     .withIndex('by_user_org', (q) =>
    //       q.eq('userId', identity.subject).eq('orgId', args.orgId)
    //     )
    //     .order('desc')
    //     .collect();

    //   const ids = favouriteBoards.map((b) => b.boardId);

    //   const boards = await getAllOrThrow(ctx.db, ids as any);

    //   console.log(ctx.db, '## board');

    //   return boards.map((board) => ({ ...board, isFavourite: true }));
    // }

    const title = args.search as string;

    let boards = [];

    if (title) {
      boards = await ctx.db
        .query('boards')
        .withSearchIndex('search_title', (q) =>
          q.search('title', title).eq('orgId', args.orgId)
        )
        .collect();
    } else {
      boards = await ctx.db
        .query('boards')
        .withIndex('by_ord', (q) => q.eq('orgId', args.orgId))
        .order('desc')
        .collect();
    }

    const boardWithFavourites = boards.map((board) => {
      return ctx.db
        .query('userFavourites')
        .withIndex('by_user_board', (q) =>
          q.eq('userId', identity.subject).eq('boardId', board._id)
        )
        .unique()
        .then((favourite) => {
          return {
            ...board,
            isFavourite: !!favourite,
          };
        });
    });

    const boardWithFavouriteBoolean = Promise.all(boardWithFavourites);

    return boardWithFavouriteBoolean;
  },
});
