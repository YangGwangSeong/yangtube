import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}
	async getHello(): Promise<string> {
		await this.prisma.article.create({
			data: {
				title: 'test2',
				description: 'test2',
				body: 'test2',
				published: true,
			},
		});
		const allUsers = await this.prisma.article.findMany();
		console.log(allUsers);
		return 'Hello World!';
	}
}
