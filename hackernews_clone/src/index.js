const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Link = require('./resolvers/Link')
const User = require('./resolvers/User')



const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})
