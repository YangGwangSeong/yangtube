import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VideoDto } from './video/video.dto';

@Injectable()
export class VideosService {
	constructor(private readonly prisma: PrismaService) {}

	async byId(_id: string) {
		const video = await this.prisma.video.findFirst({
			where: {
				id: _id,
				isPublic: true,
			},
		});

		if (!video) throw new UnauthorizedException('video not found');

		return video;
	}

	async getMostPopularByView() {
		const video = this.prisma.video.findMany({
			where: {
				views: { gt: 0 },
			},
			orderBy: {
				views: 'desc',
			},
		});

		return video;
	}

	async getAll(searchTerm?: string) {
		let where = {};

		searchTerm
			? (where = {
					AND: [
						{
							name: new RegExp(searchTerm, 'i'),
						},
						{
							isPublic: true,
						},
					],
			  })
			: (where = {
					isPublic: true,
			  });

		const video = this.prisma.video.findMany({
			where,
			orderBy: {
				createdAt: 'desc',
			},
		});
		return video;
	}

	async byUserId(userId: string, isPrivate = false) {
		let where = {};
		isPrivate
			? (where = { authorId: userId })
			: (where = { isPublic: true, authorId: userId });

		const video = this.prisma.video.findMany({
			where,
			orderBy: {
				createdAt: 'desc',
			},
		});
		return video;
	}

	async createVideo(userId: string) {
		const defaultValue: VideoDto = {
			name: '',
			authorId: userId,
			videoPath: '',
			description: '',
			thumbnailPath: '',
		};

		const video = await this.prisma.video.create({
			data: {
				name: '',
				videoPath: '',
				description: '',
				thumbnailPath: '',
				authorId: userId,
				isPublic: false,
			},
		});

		return video.id;
	}

	async updateVideo(id: string, dto: VideoDto) {
		const updateVideo = await this.prisma.video.update({
			where: {
				id: id,
			},
			data: {
				name: dto.name,
				videoPath: dto.videoPath,
				description: dto.description,
				thumbnailPath: dto.thumbnailPath,
				authorId: dto.authorId,
				isPublic: dto.isPublic,
			},
		});
		if (!updateVideo) throw new NotFoundException('Video not found');

		return updateVideo;
	}

	async deleteVideo(id: string) {
		const deleteVideo = await this.prisma.video.delete({
			where: {
				id: id,
			},
		});

		if (!deleteVideo) throw new NotFoundException('Video not found');

		return deleteVideo;
	}

	async updateCountViews(id: string) {
		const video = await this.prisma.video.findUnique({ where: { id: id } });
		if (!video) {
			throw new NotFoundException('Video not found');
		}
		const updateVideo = await this.prisma.video.update({
			where: {
				id: id,
			},
			data: {
				views: video.views + 1,
			},
		});

		return updateVideo;
	}
}
