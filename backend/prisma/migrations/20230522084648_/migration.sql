/*
  Warnings:

  - Changed the type of `isVerified` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isVerified",
ADD COLUMN     "isVerified" BOOLEAN NOT NULL,
ALTER COLUMN "subscribersCount" DROP NOT NULL,
ALTER COLUMN "subscribersCount" SET DEFAULT 0;
