import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}
	async getHello(): Promise<string> {
		// await this.prisma.article.create({
		// 	data: {
		// 		title: 'test2',
		// 		description: 'test2',
		// 		body: 'test2',
		// 		published: true,
		// 	},
		// });
		// const allUsers = await this.prisma.article.findMany();
		// console.log(allUsers);

		await this.prisma.user.create({
			data: {
				name: 'username',
				email: 'rhkdtjd_12@naver.com',
				password: 'rhkdtjd83**',
				isVerified: 'test2',
				subscribersCount: 123,
				description: 'test2',
				location: '123',
				bannerPath: '123',
				avatarPath: '123',
			},
			select: {
				id: true,
				name: true,
				email: true,
				password: true,
				isVerified: true,
				subscribersCount: true,
				description: true,
			},
		});
		return 'Hello World!';
	}
}
