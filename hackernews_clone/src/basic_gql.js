// building a graphql server

const { GraphQLServer } = require('graphql-yoga')

//dummy data
let links = [{
    id: 'link-0',
    url: 'https://steph-en-m.github.io',
    description: 'My portfolio'
},
{
    id: 'link-1',
    url: 'https://steph-en-m.github.io',
    description: 'My portfolio'
},
]

let idCount = links.length
//Resolvers
const resolvers = {
    Query: {
        info: () => `Hacker News Clone.`,
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
}

const server = new GraphQLServer({
    typeDefs:'./schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server running on port 4000`))
