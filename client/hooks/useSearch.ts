import { ChangeEvent, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useQuery } from 'react-query';
import { VideoService } from '@/services/video/VideoService';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debounceSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		['search videos', debounceSearch],
		() => VideoService.getAllVideos(debounceSearch),
		{
			select: ({ data }) => data.slice(0, 4),
			enabled: !!debounceSearch,
		},
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return {
		handleSearch,
		isSuccess,
		data,
		searchTerm,
	};
};
