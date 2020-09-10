// building a graphql server

const { GraphQLServer } = require('graphql-yoga')

//Schema
const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}

type Link {
    id: ID!
    description: String!
    url: String!
}
`

//dummy data
let links = [{
    id: 'link-0',
    url: 'https://steph-en-m.github.io',
    description: 'My portfolio'
}]

//Resolvers
const resolvers = {
    Query: {
        info: () => `Hacker News Clone.`,
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server running on port 4000`))