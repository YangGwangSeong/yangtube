import { IsString, IsUUID } from 'class-validator';

export class CommentDto {
	@IsString()
	message: string;

	@IsUUID()
	videoId: string;
}
