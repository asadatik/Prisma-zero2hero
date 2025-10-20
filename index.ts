
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

const users = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    name: "Alice",
   
  },
})

const users2 = await prisma.user.create({
  data: {
    email: "alice4@prisma.io",
    name: "Alice4",
   
  },
})


  console.log(users2)

}

main()