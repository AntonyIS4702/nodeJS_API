// src/utils/prisma.js
const { PrismaClient } = require('@prisma/client');

// Create a single PrismaClient instance
const prisma = new PrismaClient();

// Graceful shutdown (optional but recommended)
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = { prisma };
