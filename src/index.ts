
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here



// const users2 = await prisma.user.create({
//   data: {
//     email: "alice400@prisma.io",
//     name: "Alice4",
//     photo : "https://example.com/alice4.png",
   
//   },
// })

const users2 = await prisma.user.findMany({

})

  console.log(users2)

}

main()