function postedBy(parent, args, context) {
    return context.prisma.link.findone({ where: {id: parent.id } }).postedBy()
}

module.exports = {
    postedBy,
}
