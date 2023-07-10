import Image from 'next/image';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { ResponseVideo } from '@/shared/interfaces/video.interface';

const Slider: FC<{ videos: ResponseVideo[] }> = ({ videos }) => {
	return (
		<Swiper
			spaceBetween={10}
			slidesPerView={2}
			//onSlideChange={() => console.log('slide change')}
			//onSwiper={swiper => console.log(swiper)}
			className="sidebar_wf"
			autoplay={{
				delay: 3000,
			}}
		>
			{videos.map(video => (
				<SwiperSlide key={video.id}>
					<VideoItem item={video}></VideoItem>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
