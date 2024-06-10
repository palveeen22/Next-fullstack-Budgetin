const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const {hash} = require("bcryptjs")


async function main() {
  // !!!!... you will write your Prisma Client queries here...!!! //
  
  //   // Create users
  await prisma.User.create({
    data: {
      name: 'Alice',
      email: 'alice@gmail.com',
      password: await hash("password123", 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  })
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })