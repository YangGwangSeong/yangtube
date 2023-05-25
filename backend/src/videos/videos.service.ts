import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
	constructor(private readonly prisma: PrismaService) {}

	async byId(_id: string) {
		const video = await this.prisma.video.findFirst({
			where: {
				id: _id,
				isPublic: 'true',
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
							isPublic: 'true',
						},
					],
			  })
			: (where = {
					isPublic: 'true',
			  });

		const video = this.prisma.video.findMany({
			where,
			orderBy: {
				createdAt: 'desc',
			},
		});
		return video;
	}
}
