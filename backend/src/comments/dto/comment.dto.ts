import { IsString, IsUUID } from 'class-validator';

export class CommentDto {
	@IsString()
	message: string;

	@IsUUID()
	authorId: string;

	@IsUUID()
	videoId: string;
}
