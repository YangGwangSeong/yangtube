export interface ResponseUser {
	id: string;
	email: string;
	name: string;
	avatarPath: string;
	description: string;
	location: string;
	subscripbersCount: number;
	createdAt: string;
	updatedAt: string;
	videosCount?: number;
	isVerified: boolean;
}

export interface UserDto
	extends Pick<
		ResponseUser,
		'email' | 'name' | 'description' | 'location' | 'avatarPath'
	> {}
