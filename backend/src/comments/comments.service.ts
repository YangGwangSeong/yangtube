import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
	constructor(private readonly prisma: PrismaService) {}

	async byVideoId(videoId: string): Promise<CommentDto[]> {
		const comments = this.prisma.comment.findMany({
			where: {
				videoId: videoId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return comments;
	}

	async createComment(userId: string, dto: CommentDto): Promise<CommentDto> {
		const comment = await this.prisma.comment.create({
			data: {
				message: dto.message,
				videoId: dto.videoId,
				authorId: userId,
			},
		});

		return comment;
	}
}
