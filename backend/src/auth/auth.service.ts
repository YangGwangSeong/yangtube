import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { compare, genSalt, hash } from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prisma: PrismaService,
	) {}

	async register(dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		});
		if (oldUser)
			throw new BadRequestException(
				'User with this email is already in the system',
			);

		const salt = await genSalt(10);

		const newUser = await this.prisma.user.create({
			data: {
				email: dto.email,
				password: await hash(dto.password, salt),
				name: '',
				isVerified: '',
				subscribersCount: 0,
				description: '',
				location: '',
				bannerPath: '',
				avatarPath: '',
			},
		});

		return {
			user: newUser,
			accessToken: await this.issueAccessToken(newUser.id),
		};
	}

	async issueAccessToken(userId: string): Promise<string> {
		const data = { _id: userId };

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '31d',
		});

		return accessToken;
	}
}
