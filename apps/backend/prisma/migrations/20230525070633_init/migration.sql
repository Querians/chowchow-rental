/*
  Warnings:

  - The primary key for the `Billing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OrderTransport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `timeAssign` on the `OrderTransport` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Billing` DROP PRIMARY KEY,
    MODIFY `billingId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`billingId`, `billTimestamp`);

-- AlterTable
ALTER TABLE `OrderTransport` DROP PRIMARY KEY,
    MODIFY `timeAssign` TIMESTAMP NOT NULL,
    ADD PRIMARY KEY (`orderId`, `timeAssign`);
