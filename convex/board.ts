import {mutation} from './_generated/server'
import {v} from 'convex/values'


export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth?.getUserIdentity()

    if(!identity) throw new Error('Unauthorized')
  }
})