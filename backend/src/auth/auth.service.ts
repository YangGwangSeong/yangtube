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

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);

		return {
			user: user,
			accessToken: await this.issueAccessToken(user.id),
		};
	}

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
				isVerified: true,
				subscribersCount: 0,
				description: '',
				location: '',
				avatarPath: '',
			},
		});

		return {
			user: newUser,
			accessToken: await this.issueAccessToken(newUser.id),
		};
	}

	async validateUser(dto: AuthDto): Promise<User> {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		});
		if (!user) throw new UnauthorizedException('User not found');

		const isValidPassword = await compare(dto.password, user.password);
		if (!isValidPassword) throw new UnauthorizedException('Invalid password');

		return user;
	}

	async issueAccessToken(userId: string): Promise<string> {
		const data = { _id: userId };

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '31d',
		});

		return accessToken;
	}
}
