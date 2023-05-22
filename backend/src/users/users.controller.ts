import {
	Body,
	Controller,
	HttpCode,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile')
	async profile(@Body() dto: UserDto) {
		return this.usersService.updateProfile(
			'441c8f2c-5ac9-4e93-a245-ef5d8f8e0a7f',
			dto,
		);
	}
}
