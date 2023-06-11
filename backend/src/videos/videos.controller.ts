import {
	Controller,
	Get,
	ValidationPipe,
	UsePipes,
	HttpCode,
	Put,
	Body,
	Param,
	Post,
	Delete,
	Query,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideoDto } from './dto/video.dto';
import { CurrentUser } from 'src/users/decorators/user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('videos')
export class VideosController {
	constructor(private readonly videosService: VideosService) {}

	@Get('get-private/:id')
	@Auth()
	async getVideoPrivateById(@Param('id') id: string): Promise<VideoDto> {
		return this.videosService.byId(id, false);
	}

	@Get('by-user/:userId')
	async getVideoByUserId(@Param('userId') userId: string): Promise<VideoDto[]> {
		return this.videosService.byUserId(userId);
	}

	@Get('by-user-private')
	@Auth()
	async getVideoByUserIdPrivate(
		@CurrentUser('id') id: string,
	): Promise<VideoDto[]> {
		return this.videosService.byUserId(id, true);
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string): Promise<VideoDto[]> {
		return this.videosService.getAll(searchTerm);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@Post()
	@Auth()
	async createVideo(@CurrentUser('id') id: string): Promise<string> {
		return this.videosService.createVideo(id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateVideo(
		@Param('id') id: string,
		@Body() dto: VideoDto,
	): Promise<VideoDto> {
		return this.videosService.updateVideo(id, dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteVideo(@Param('id') id: string): Promise<VideoDto> {
		return this.videosService.deleteVideo(id);
	}

	@Get('most-popular')
	async getMostPopularByViews(): Promise<VideoDto[]> {
		return this.videosService.getMostPopularByViews();
	}

	@HttpCode(200)
	@Put('update-views/:videoId')
	async updateViews(@Param('videoId') videoId: string): Promise<VideoDto> {
		return this.videosService.updateCountViews(videoId);
	}

	@HttpCode(200)
	@Put('update-likes/:videoId')
	@Auth()
	async updateLikes(
		@Param('videoId') videoId: string,
		@Query('type') type: 'inc' | 'dis',
	): Promise<VideoDto> {
		return this.videosService.updateReaction(videoId, type);
	}

	@Get(':id')
	async getVideoById(@Param('id') id: string): Promise<VideoDto> {
		return this.videosService.byId(id);
	}
}
