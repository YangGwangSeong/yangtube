import Home from '@/components/screens/home/Home';
import { HomeProps } from '@/components/screens/home/home.interface';
import { VideoService } from '@/services/video/VideoService';
import { shuffle } from 'lodash';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<HomeProps> = props => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAllVideos();
		const { data: topVideo } = await VideoService.getMostPopular();
		const topChannels = [{}];

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos).slice(0, 5),
				randomVideo: shuffle(newVideos)[0],
				topVideo,
				topChannels,
			},
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {
				newVideos: [],
				weeklyVideos: {},
				randomVideo: {},
				topVideo: {},
				topChannels: [],
			},
			revalidate: 60,
		};
	}
};

export default HomePage;
