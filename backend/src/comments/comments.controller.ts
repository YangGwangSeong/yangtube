import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/users/decorators/user.decorator';

@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@Get('by-video/:videoId')
	async getCommentByUserId(
		@Param('videoId') videoId: string,
	): Promise<CommentDto[]> {
		return this.commentsService.byVideoId(videoId);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@Post()
	@Auth()
	async createComment(
		@CurrentUser('id') id: string,
		@Body() dto: CommentDto,
	): Promise<CommentDto> {
		return this.commentsService.createComment(id, dto);
	}
}
