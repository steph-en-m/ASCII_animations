const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
    //db CRUD ops
    const newLink = await prisma.link.create({
        data: {
            description: "My github profile",
            url: "https://github.com/steph-en-m"
        }
    })

    const allLinks = await prisma.link.findMany()
    console.log(allLinks)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })