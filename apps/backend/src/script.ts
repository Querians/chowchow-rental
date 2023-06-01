import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const allCustomers = await prisma.orderStatus.findMany();
  console.log(allCustomers);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
