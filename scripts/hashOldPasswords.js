// scripts/hashOldPasswords.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const admins = await prisma.admin.findMany();

  for (const admin of admins) {
    // Vérifie si le password n’est pas déjà hashé (exemple naïf : longueur d’un hash bcrypt = 60)
    if (admin.password.length !== 60) {
      const hashed = await bcrypt.hash(admin.password, 10);
      await prisma.admin.update({
        where: { id: admin.id },
        data: { password: hashed },
      });
      console.log(`Mot de passe hashé pour admin ${admin.email}`);
    } else {
      console.log(`Mot de passe déjà hashé pour admin ${admin.email}`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
