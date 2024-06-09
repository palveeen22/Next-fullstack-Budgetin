const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const {hash} = require("bcryptjs")


async function main() {
    // !!!!... you will write your Prisma Client queries here...!!! //
    
    // Create users
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: await hash("password123", 10)
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: await hash("password123", 10)
      },
    ],
  })

  // Create budgets
  await prisma.budget.createMany({
    data: [
      {
        id: 1,
        userId: 1,
        month: new Date('2022-01-01'),
        year: new Date('2022-01-01'),
        totalIncome: 100000,
        totalExpenses: 50000,
        totalSavings: 50000,
      },
      {
        id: 2,
        userId: 1,
        month: new Date('2022-02-01'),
        year: new Date('2022-02-01'),
        totalIncome: 120000,
        totalExpenses: 60000,
        totalSavings: 60000,
      },
      {
        id: 3,
        userId: 2,
        month: new Date('2022-01-01'),
        year: new Date('2022-01-01'),
        totalIncome: 80000,
        totalExpenses: 40000,
        totalSavings: 40000,
      },
    ],
  })

  // Create receives
  await prisma.receive.createMany({
    data: [
      {
        id: 1,
        budgetId: 1,
        amount: 10000,
        category: 'Salary',
      },
      {
        id: 2,
        budgetId: 1,
        amount: 5000,
        category: 'Interest',
      },
      {
        id: 3,
        budgetId: 2,
        amount: 8000,
        category: 'Salary',
      },
      {
        id: 4,
        budgetId: 2,
        amount: 4000,
        category: 'Interest',
      },
    ],
  })

  // Create spends
  await prisma.spend.createMany({
    data: [
      {
        id: 1,
        budgetId: 1,
        amount: 20000,
        category: 'Rent',
      },
      {
        id: 2,
        budgetId: 1,
        amount: 10000,
        category: 'Utilities',
      },
      {
        id: 3,
        budgetId: 2,
        amount: 12000,
        category: 'Rent',
      },
      {
        id: 4,
        budgetId: 2,
        amount: 6000,
        category: 'Utilities',
      },
    ],
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