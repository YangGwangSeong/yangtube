import Image from 'next/image';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider: FC = () => {
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
			<SwiperSlide className="video_item">
				<div className="thumbnail">
					<Image src="1.jpg" alt=""></Image>
					<time>16:55</time>
				</div>
				<div className="author">Michel Adams</div>
				<div className="name">Day in my life: Summer ...</div>
				<div className="number_info">
					<div className="views">VIEWS 28.6K</div>
					<div className="date">6DS AGO</div>
				</div>
			</SwiperSlide>

			<SwiperSlide className="video_item">
				<div className="thumbnail">
					<Image src="1.jpg" alt=""></Image>
					<time>16:55</time>
				</div>
				<div className="author">Michel Adams</div>
				<div className="name">Day in my life: Summer ...</div>
				<div className="number_info">
					<div className="views">VIEWS 28.6K</div>
					<div className="date">6DS AGO</div>
				</div>
			</SwiperSlide>

			<SwiperSlide className="video_item">
				<div className="thumbnail">
					<Image src="1.jpg" alt=""></Image>
					<time>16:55</time>
				</div>
				<div className="author">Michel Adams</div>
				<div className="name">Day in my life: Summer ...</div>
				<div className="number_info">
					<div className="views">VIEWS 28.6K</div>
					<div className="date">6DS AGO</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
