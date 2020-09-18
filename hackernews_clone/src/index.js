const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const server = new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    context: {
        prisma,
    }
})

const resolvers = {
    Query: {
        info: () => "Hackernews_clone_API",
        feed: async (parent, args, context) => {
            return context.prisma.link.findMany()
        },
    },

    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },
    },
}