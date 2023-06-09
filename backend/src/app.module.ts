import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { CommentsModule } from './comments/comments.module';
import { MediaModule } from './media/media.module';

@Module({
	imports: [ConfigModule.forRoot(), AuthModule, UsersModule, VideosModule, CommentsModule, MediaModule],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
