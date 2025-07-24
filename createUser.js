const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const password = 'motdepasse123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: 'yan@example.com',
      nom: 'Yan',
      role: 'user',
      password: hashedPassword,
    },
  });

  console.log('✅ Utilisateur créé :', user);
}

main()
  .catch((e) => {
    console.error('❌ Erreur :', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
