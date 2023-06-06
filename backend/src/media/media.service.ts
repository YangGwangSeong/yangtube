import { Injectable } from '@nestjs/common';
import { MediaResponse } from './media.interface';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';

@Injectable()
export class MediaService {
	async saveMedia(
		mediaFile: Express.Multer.File,
		folder = 'default',
	): Promise<MediaResponse> {
		const uploadFolder = `${path}/uploads/${folder}`;
		await ensureDir(uploadFolder);

		await writeFile(
			`${uploadFolder}/${mediaFile.originalname}`,
			mediaFile.buffer,
		);

		return {
			url: `/uploads/${folder}/${mediaFile.originalname}`,
			name: mediaFile.originalname,
		};
	}
}
