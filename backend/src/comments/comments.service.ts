import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
	constructor(private readonly prisma: PrismaService) {}

	async byVideoId(videoId: string) {
		const video = this.prisma.comment.findMany({
			where: {
				videoId: videoId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return video;
	}

	async createComment(
		userId: string,
		videoId: string,
		dto: CommentDto,
	): Promise<string> {
		const comment = await this.prisma.comment.create({
			data: {
				message: dto.message,
				authorId: userId,
				videoId: videoId,
			},
		});

		return comment.id;
	}
}
