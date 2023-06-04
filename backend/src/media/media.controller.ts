import {
	Controller,
	HttpCode,
	Post,
	Query,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaResponse } from './media.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('media')
export class MediaController {
	constructor(private readonly mediaService: MediaService) {}

	@HttpCode(201)
	@Post()
	@Auth()
	@UseInterceptors(FileInterceptor('media'))
	async uploadMediaFile(
		@UploadedFile() mediaFile: Express.Multer.File,
		@Query('folder') folder?: string,
	): Promise<MediaResponse> {
		return this.mediaService.saveMedia(mediaFile, folder);
	}
}
