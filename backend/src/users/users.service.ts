import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	exclude<User, Key extends keyof User>(
		user: User,
		keys: Key[],
	): Omit<User, Key> {
		for (let key of keys) {
			delete user[key];
		}
		return user;
	}

	async getUser(id: string) {
		// const videosCount = await this.prisma.user.findMany({
		// 	include: {
		// 		_count: {
		// 			select: {
		// 				videos: true,
		// 			},
		// 		},
		// 	},
		// });

		// const xprisma = this.prisma.$extends({
		// 	result: {
		// 		user: {
		// 			videosCount: {
		// 				needs: {},
		// 				compute(user) {
		// 					return 1;
		// 				},
		// 			},
		// 		},
		// 	},
		// });

		const user = await this.prisma.user.findUnique({
			// include: {
			// 	_count: {
			// 		select: {
			// 			videos: true,
			// 		},
			// 	},
			// },
			where: {
				id: id,
			},
			select: {
				id: true,
				name: true,
				email: true,
				isVerified: true,
				subscribersCount: true,
				description: true,
				location: true,
				avatarPath: true,
				createdAt: true,
				updatedAt: true,
				_count: {
					select: {
						videos: true,
						comments: true,
					},
				},
			},
		});

		if (!user) throw new UnauthorizedException('User not found');

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			isVerified: user.isVerified,
			subscribersCount: user.subscribersCount,
			description: user.description,
			location: user.location,
			avatarPath: user.avatarPath,
			videosCount: user._count.videos,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
	}

	async byId(_id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: _id,
			},
		});
		this.exclude(user, ['password', 'createdAt', 'updatedAt']);

		if (!user) throw new UnauthorizedException('User not found');

		return user;
	}

	async updateProfile(_id: string, dto: UserDto): Promise<void> {
		const user = await this.byId(_id);
		const isSameUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		});

		if (isSameUser && _id !== isSameUser.id)
			throw new UnauthorizedException('Email is busy');

		if (dto.password) {
			const salt = await genSalt(10);
			user.password = await hash(dto.password, salt);
		}

		user.email = dto.email;
		user.name = dto.name;
		user.description = dto.description;
		user.location = dto.location;
		user.avatarPath = dto.avatarPath;

		const updateUser = await this.prisma.user.update({
			where: {
				id: _id,
			},
			data: user,
		});
	}

	async getMostPopular() {
		const where = {
			subscribersCount: { gt: 0 },
		};

		const user = this.prisma.user.findMany({
			where,
			select: {
				id: true,
				name: true,
				email: true,
				isVerified: true,
				subscribersCount: true,
				description: true,
				location: true,
				avatarPath: true,
			},
			orderBy: {
				subscribersCount: 'desc',
			},
		});

		return user;
	}
}
