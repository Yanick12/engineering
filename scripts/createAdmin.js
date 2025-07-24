// scripts/createAdmin.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 10);

  const admin = await prisma.admin.create({
    data: {
      email: 'admin@solutum.com',
      password: hashedPassword,
      nom: 'Admin Solutum',
    },
  });

  console.log('✅ Admin créé :', admin);
}

main()
  .catch((e) => {
    console.error('❌ Erreur :', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
