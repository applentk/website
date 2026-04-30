// From https://www.prisma.io/docs/guides/frameworks/nextjs#26-set-up-prisma-client
// new PrismaClient() can create many clients/connections over time from HMR
// The global cache pattern avoids that by reusing one instance in development

import { PrismaClient } from "../../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg"; 

const globalForPrisma = global as unknown as {
  prisma: PrismaClient; 
}; 

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
}); 

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter }); 

if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma; 

export default prisma; 