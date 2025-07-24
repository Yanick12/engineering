-- DropIndex
DROP INDEX `User_nom_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'Admin';

-- CreateTable
CREATE TABLE `Temoignage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomClient` VARCHAR(191) NOT NULL,
    `fonctionClient` VARCHAR(191) NOT NULL,
    `texte` VARCHAR(191) NOT NULL,
    `photoClientUrl` VARCHAR(191) NULL,
    `datePublication` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `sujet` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `dateReception` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statut` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Newsletter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `dateAbonnement` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statut` BOOLEAN NOT NULL DEFAULT true,
    `token` VARCHAR(191) NULL,

    UNIQUE INDEX `Newsletter_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `auteur` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Blog_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Realisation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `details` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `dateDebut` DATETIME(3) NOT NULL,
    `dateFin` DATETIME(3) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `Formation_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
