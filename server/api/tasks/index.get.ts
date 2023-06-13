// eslint-disable-next-line import/named
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  return await prisma.task.findMany()
})
