/*
  Warnings:

  - You are about to drop the `SavedEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedEvent" DROP CONSTRAINT "SavedEvent_userId_fkey";

-- DropTable
DROP TABLE "SavedEvent";
