import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async byId(_id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: _id,
			},
		});

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
		user.bannerPath = dto.bannerPath;
		user.avatarPath = dto.avatarPath;

		const updateUser = await this.prisma.user.update({
			where: {
				id: _id,
			},
			data: user,
		});
	}

	async getMostPopular() {
		return this.prisma.user.findMany({
			where: {
				subscribersCount: { gt: 0 },
			},
		});
	}
}
