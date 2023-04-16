/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPublic` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailPath` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoPath` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dislike" INTEGER DEFAULT 0,
ADD COLUMN     "isPublic" TEXT NOT NULL,
ADD COLUMN     "like" INTEGER DEFAULT 0,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "thumbnailPath" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "videoPath" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
