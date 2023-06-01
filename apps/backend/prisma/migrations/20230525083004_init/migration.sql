-- CreateTable
CREATE TABLE `Promotion` (
    `promotionCode` VARCHAR(191) NOT NULL,
    `discountPercent` FLOAT NOT NULL,
    `maximumDiscount` FLOAT NOT NULL,
    `minimumPrice` FLOAT NOT NULL,
    `startDate` TIMESTAMP(0) NOT NULL,
    `endDate` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`promotionCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `customerId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `dob` DATE NOT NULL,
    `tel` VARCHAR(10) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(60) NOT NULL,

    UNIQUE INDEX `Customer_tel_key`(`tel`),
    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderPromotion` (
    `promotionCode` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`promotionCode`, `orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderTransport` (
    `orderId` VARCHAR(191) NOT NULL,
    `timeAssign` TIMESTAMP NOT NULL,
    `vehicleLicense` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,
    `isReturn` BOOLEAN NOT NULL,
    `timeGo` TIMESTAMP(0) NULL,
    `timeBack` TIMESTAMP(0) NULL,

    PRIMARY KEY (`orderId`, `timeAssign`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleInfo` (
    `vehicleLicence` VARCHAR(10) NOT NULL,
    `vehicleTypeId` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(20) NOT NULL,
    `model` VARCHAR(40) NOT NULL,
    `registerDate` DATE NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`vehicleLicence`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleType` (
    `vehicleTypeId` VARCHAR(3) NOT NULL,
    `vehicleTypeN` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`vehicleTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderId` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `addressDetail` TEXT NOT NULL,
    `street` TEXT NOT NULL,
    `subdistrict` TEXT NOT NULL,
    `zipcode` VARCHAR(5) NOT NULL,
    `latitude` DECIMAL(8, 6) NOT NULL,
    `longitude` DECIMAL(9, 6) NOT NULL,
    `receiverTel` VARCHAR(10) NOT NULL,
    `totalPrice` DOUBLE NOT NULL,
    `orderDate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sendingDate` TIMESTAMP(0) NULL,
    `returnDate` TIMESTAMP(0) NULL,
    `receiver` VARCHAR(30) NULL,
    `statusCode` INTEGER NOT NULL,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `invoiceId` VARCHAR(191) NOT NULL,
    `paymentTypeId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `costAmount` DOUBLE NOT NULL,
    `deadlineDate` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`invoiceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Billing` (
    `billingId` VARCHAR(191) NOT NULL,
    `billTimestamp` TIMESTAMP(0) NOT NULL,
    `invoiceId` VARCHAR(191) NOT NULL,
    `paymentMethodId` VARCHAR(191) NOT NULL,
    `paidAmount` DOUBLE NOT NULL,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `tel` VARCHAR(10) NOT NULL,
    `paymentSlipUrl` TEXT NOT NULL,

    PRIMARY KEY (`billingId`, `billTimestamp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `cartNo` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `timestamp` TIMESTAMP(0) NOT NULL,

    UNIQUE INDEX `Cart_cartNo_key`(`cartNo`),
    PRIMARY KEY (`cartNo`, `customerId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderCart` (
    `orderId` VARCHAR(191) NOT NULL,
    `cartNo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `OrderCart_cartNo_key`(`cartNo`),
    PRIMARY KEY (`orderId`, `cartNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubOrder` (
    `orderId` VARCHAR(191) NOT NULL,
    `itemId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderId`, `itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderStatus` (
    `statusCode` INTEGER NOT NULL,
    `statusDef` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`statusCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentType` (
    `paymentTypeId` VARCHAR(4) NOT NULL,
    `paymentTypeName` VARCHAR(50) NOT NULL,
    `interest` DOUBLE NOT NULL,
    `times` INTEGER NOT NULL,

    PRIMARY KEY (`paymentTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentMethod` (
    `paymentMethodId` VARCHAR(6) NOT NULL,
    `paymentMethodName` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`paymentMethodId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `categoryId` VARCHAR(4) NOT NULL,
    `categoryName` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productId` VARCHAR(6) NOT NULL,
    `productName` VARCHAR(40) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `pictureUrl` TEXT NOT NULL,
    `pricePerDay` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `width` DOUBLE NOT NULL,
    `depth` DOUBLE NOT NULL,
    `color` VARCHAR(20) NOT NULL,
    `material` VARCHAR(30) NOT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `itemId` VARCHAR(8) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `itemRegisterDate` TIMESTAMP(0) NOT NULL,
    `stockAddress` VARCHAR(10) NOT NULL,
    `itemStatusId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemStatus` (
    `itemStatusId` VARCHAR(1) NOT NULL,
    `itemStatusName` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`itemStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Issue` (
    `issueId` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,
    `timestamp` TIMESTAMP(0) NOT NULL,
    `status` TINYINT NOT NULL,
    `categoryProblemId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`issueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryProblem` (
    `categoryProblemId` VARCHAR(2) NOT NULL,
    `categoryProblemN` TEXT NOT NULL,
    `positionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoryProblemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StaffInfo` (
    `staffId` VARCHAR(191) NOT NULL,
    `prefix` VARCHAR(4) NOT NULL,
    `staffFirstName` VARCHAR(30) NOT NULL,
    `staffLastName` VARCHAR(30) NOT NULL,
    `positionId` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(10) NOT NULL,
    `startDate` DATE NOT NULL,
    `dob` DATE NOT NULL,
    `salary` DOUBLE NOT NULL,
    `password` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`staffId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Position` (
    `positionId` VARCHAR(3) NOT NULL,
    `positionN` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`positionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderPromotion` ADD CONSTRAINT `OrderPromotion_promotionCode_fkey` FOREIGN KEY (`promotionCode`) REFERENCES `Promotion`(`promotionCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPromotion` ADD CONSTRAINT `OrderPromotion_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTransport` ADD CONSTRAINT `OrderTransport_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTransport` ADD CONSTRAINT `OrderTransport_vehicleLicense_fkey` FOREIGN KEY (`vehicleLicense`) REFERENCES `VehicleInfo`(`vehicleLicence`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTransport` ADD CONSTRAINT `OrderTransport_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffInfo`(`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleInfo` ADD CONSTRAINT `VehicleInfo_vehicleTypeId_fkey` FOREIGN KEY (`vehicleTypeId`) REFERENCES `VehicleType`(`vehicleTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_statusCode_fkey` FOREIGN KEY (`statusCode`) REFERENCES `OrderStatus`(`statusCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_paymentTypeId_fkey` FOREIGN KEY (`paymentTypeId`) REFERENCES `PaymentType`(`paymentTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Billing` ADD CONSTRAINT `Billing_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice`(`invoiceId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Billing` ADD CONSTRAINT `Billing_paymentMethodId_fkey` FOREIGN KEY (`paymentMethodId`) REFERENCES `PaymentMethod`(`paymentMethodId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderCart` ADD CONSTRAINT `OrderCart_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderCart` ADD CONSTRAINT `OrderCart_cartNo_fkey` FOREIGN KEY (`cartNo`) REFERENCES `Cart`(`cartNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubOrder` ADD CONSTRAINT `SubOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubOrder` ADD CONSTRAINT `SubOrder_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`itemId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_itemStatusId_fkey` FOREIGN KEY (`itemStatusId`) REFERENCES `ItemStatus`(`itemStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffInfo`(`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_categoryProblemId_fkey` FOREIGN KEY (`categoryProblemId`) REFERENCES `CategoryProblem`(`categoryProblemId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoryProblem` ADD CONSTRAINT `CategoryProblem_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`positionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaffInfo` ADD CONSTRAINT `StaffInfo_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`positionId`) ON DELETE RESTRICT ON UPDATE CASCADE;
