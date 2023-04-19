-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(30) NOT NULL,
    `lastname` VARCHAR(30) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `tel` VARCHAR(10) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `addressDetail` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `subdistrict` VARCHAR(191) NOT NULL,
    `zipcode` VARCHAR(5) NOT NULL,
    `latitude` DECIMAL(8, 6) NOT NULL,
    `longitude` DECIMAL(9, 6) NOT NULL,
    `receiverTel` VARCHAR(10) NOT NULL,
    `totalPrice` DOUBLE NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sendingDate` DATETIME(3) NULL,
    `returnDate` DATETIME(3) NULL,
    `receiver` VARCHAR(191) NOT NULL,
    `statusCode` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderStatus` (
    `statusCode` INTEGER NOT NULL,
    `statusDef` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`statusCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_statusCode_fkey` FOREIGN KEY (`statusCode`) REFERENCES `OrderStatus`(`statusCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
